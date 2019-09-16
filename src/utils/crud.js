export const getOne = model => async (req, res) => {
  const id = req.params.id
  const userId = req.user._id
  const document = await model.findOne({ _id: id, createdBy: userId }).exec()
  if (document) {
    res.status(200).json({ data: document })
  } else {
    res.status(404).end()
  }
}

export const getMany = model => async (req, res) => {
  let docs = await model.find({ createdBy: req.user._id }).exec()
  if (docs) {
    res.status(200).json({ data: docs })
  } else {
    res.status(404).json({ message: 'could not find any items' })
  }
}

export const createOne = model => async (req, res) => {
  const doc = await model.create({ ...req.body, createdBy: req.user._id })
  res.status(201).json({ data: doc })
}

export const updateOne = model => async (req, res) => {
  const doc = await model.findOneAndUpdate(
    {
      _id: req.params.id,
      createdBy: req.user._id
    },
    req.body,
    { new: true }
  )
  if (!doc) {
    return res.status(400).end()
  }
  res.status(200).json({ data: doc })
}

export const removeOne = model => async (req, res) => {
  const doc = await model
    .findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id
    })
    .exec()

  if (!doc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: doc })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
