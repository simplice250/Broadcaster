import Joi from '@hapi/joi';

class UserValidations {
  static userSignup(req, res, next) {
    const scheme = Joi.object().keys({
      firstname: Joi.string().max(50).required(),
      lastname: Joi.string().max(50).required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.string().required(),
      username: Joi.string().max(20).required(),
      password: Joi.string().min(5).max(50).required(),
    });

    const { error } = scheme.validate(req.body);
    if (error) {
      res.status(400).json({
        status: res.statusCode,
        error: 'invalid credentials',
      });
    } else next();
  }

  static userSignin(req, res, next) {
    const plat = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).max(50).required(),
    });

    const { error } = plat.validate(req.body);
    if (error) {
      res.status(400).json({
        status: res.statusCode,
        error: error.details[0].message,
      });
    } else next();
  }

  static validateIncident(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string().min(10).required(),
      type: Joi.string().min(5).required(),
      comment: Joi.string().min(15).required(),
      location: Joi.string().min(15).required(),
      tagname:join.string().max(10),

    });

    try {
      const { error } = schema.validate(req.body);
      if (error) {
        res.status(400).json({
          status: res.statusCode,
          error: error.details[0].message,
        });
      } else next();
    } catch (err) {
      res.status(404).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  


 static validateLocation(req, res, next) {
    const schema = Joi.object().keys({
      location: Joi.string().min(10),
    });

    try {
      const { error } = schema.validate(req.body);
      if (error) {
        res.status(400).json({
          status: res.statusCode,
          error: error.details[0].message,
        });
      } else next();
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }

  static validateComment(req, res, next) {
    const schema = Joi.object().keys({
      comment: Joi.string().min(15),
    });

    try {
      const { error } = schema.validate(req.body);
      if (error) {
        res.status(400).json({
          status: res.statusCode,
          error: error.details[0].message,
        });
      } else next();
    } catch (err) {
      res.status(500).json({
        status: res.statusCode,
        error: err.message,
      });
    }
  }
}

export default UserValidations;
