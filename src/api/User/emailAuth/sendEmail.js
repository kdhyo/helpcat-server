import { sendWelcomeEmail } from "../../../config/emailGenerator";

export default {
  Mutation: {
    sendEmail: async (_, args, { prisma }) => {
      const { email } = args;
      try {
        const userCheck = await prisma.user.findOne({
          where: {
            email,
          },
        });

        if (userCheck) return new Error("이미 존재하는 이메일입니다.");

        const validateEmailToken = Math.random().toString(36).substr(2, 8);

        await sendWelcomeEmail(email, validateEmailToken);

        return validateEmailToken;
      } catch (error) {
        return error;
      }
    },
  },
};
