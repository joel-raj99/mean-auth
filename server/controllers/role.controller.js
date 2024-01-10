import Role from "../model/Role.js";

export const createRole = async (req, res, next) => {
    try {
        if (req.body.role && req.body.role !== '') {
            const newRole = new Role(req.body);
            await newRole.save();
            return res.status(200).send('role created');

        }
        else {
            return res.status(404).send('role error')
        }
    } catch (error) {
        return res.status(500).send('internal server error')
    }
}

export const updateRole = async (req, res, next) => {
    try {
        const role = await Role.findById({ _id: req.params.id });
        if (role) {
            const newData = await Role.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            )
            return res.status(200).send('role updated')
        } else {
            return res.status(404).send("No such role exists!");

        }

    } catch (error) {
        return res.send(500).send('internal server error')

    }
}
export const getaAllRole = async (req, res, next) => {
    try {
        const role = await Role.find({});
        return res.status(200).send(role)
    } catch (error) {
        return res.send(500).send('internal server error')
    }
}

export const deteleRole = async (req, res, next) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findById({ _id: roleId });
        if (!role) {
            await Role.findByIdAndDelete(roleId);
            return res.status(200).send("Deleted Successfully!");

        }
        else {
            return res.send(404).send('role not found');
        }
    }
    catch (error) {
        return res.send(500).send('internal server error');
    }
}