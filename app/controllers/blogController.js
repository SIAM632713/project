export const createblog=async (req, res) => {
    return res.json({message:'blog created successfully'})
}

export const readblog=async (req, res) => {
    return res.json({message:'Blog read successfully'})
}

export const updateblog=async (req, res) => {
    return res.json({message:'Blog update successfully'})
}

export const deleteblog=async (req, res) => {
    return res.json({message:'Blog delete successfully'})
}