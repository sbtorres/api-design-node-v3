export const getHome = (req, res) => {
  res.status(200).send({ message: 'this is the home get route' })
}

export const postHome = (req, res) => {
  res.status(201).send({ message: 'this is the home post route' })
}

export const getId = (req, res) => {
  res.status(200).send({ message: 'this is the id get route' })
}

export const deleteId = (req, res) => {
  res.status(204).send({ message: 'this is the id delete route' })
}

export const putId = (req, res) => {
  res.status(204).send({ message: 'this is the id post route' })
}
