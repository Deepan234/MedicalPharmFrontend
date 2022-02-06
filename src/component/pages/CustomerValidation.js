const CustomerValidation = {
    userId: {
      rules: [
        {
          test: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          message: 'user Id must be in email Id format',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
      password: {
        rules: [
          {
            test: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            message:'Must meet the password policy,for example:Abcd@2000',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },
  
  };
  export default CustomerValidation;