const User = require('../models/user');

const verifyAdmin = async (req, res, next) => {
    try {
        const user = req.user;
        console.log("🔍 Checking User:", user); 

        if (!user || !user.email) {
            return res.status(401).send({ message: '❌ Unauthorized: No user found in request' });
        }

        const query = { email: user.email };
        const result = await User.findOne(query);

        console.log("🔍 Found User:", result); 

        if (!result) {
            return res.status(401).send({ message: '❌ Unauthorized: User not found in database' });
        }

        if (result.role !== "Admin") {
            return res.status(403).send({ message: '❌ Forbidden: User is not an admin' });
        }

        next();
    } catch (error) {
        console.error("❌ Error in verifyAdmin:", error);
        res.status(500).send({ message: '❌ Server error while verifying admin', error: error.message });
    }
};

module.exports = verifyAdmin;
