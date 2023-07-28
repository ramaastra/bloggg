const permit = permittedRole => {
  return (req, res, next) => {
    const { user } = req

    if(permittedRole === user.role) next()
    else res.redirect('back')
  }
}

module.exports = permit
