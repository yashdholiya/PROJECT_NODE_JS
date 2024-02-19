const OrderService = require('../../services/user/order.user.service');
const CartService = require('../../services/user/cart.user.service');

const orderService = new OrderService();
const cartService = new CartService();



exports.addNewOrder = async (req, res) => {
    try {
        const carts = await cartService.getallcart(req.query, req.user);

        const orderItems = carts.map((item) => {
            const quantity = item.quantity || 0; // Set default value if quantity is undefined
            const price = item.cartItem.price || 0; // Set default value if price is undefined

            return {
                cartItem: item.cartItem._id,
                quantity: quantity,
                price: price
            };
        });

        const totalAmount = orderItems.reduce((total, item) => {
            const itemTotal = item.quantity * item.price;
            return total + (isNaN(itemTotal) ? 0 : itemTotal); 
        }, 0);

        if (isNaN(totalAmount)) {
            throw new Error("Invalid totalAmount calculation");
        }

        const newOrder = {
            user: req.user._id,
            items: orderItems,
            totalAmount: totalAmount
        };

        const order = await orderService.addNewOrder(newOrder);
        await cartService.updatecart(req.user._id, { isDelete: true });

        res.json({ order, message: 'Order Success....' });
    } catch (err) {
        console.error(err);
        res.json({ message: 'Internal Server Error' });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = await orderService.getOrder(req.body.orderID, { isDelete: false });

        if (!order) {
            return res.json("Order is Not found From this User..");
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.json("Internal Server Error From GetAllOrder Controller");
    }
};

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await orderService.getAllOrder({ isDelete: false });

        if (!orders) {
            return res.json({ message: "Order is not found..." });
        }

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.json({ message: "Internal Server Error From GetAllOrder Controller" });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.body.orderID, { isDelete: true });

        if (!order) {
            return res.json({ message: "Order is not found..." });
        }

        res.json({ order, message: "Order is Deleted Successfully" });
    } catch (error) {
        console.error(error);
        res.json({ message: "Internal Server Error From DeleteOrder Controller" });
    }
};
