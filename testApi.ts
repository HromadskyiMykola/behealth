import { apiService } from "./src/common/api-Service";

// run:  npx ts-node --project tsconfig.ts-node.json testApi.ts

const login = async () => {
  try {
    // const result = await apiService.login({
    //   email: "sasha@sasha.ua",
    //   password: "123qwe",
    //   user_type: "patient",
    // });

    // console.log(result);
  } catch (error) {
    console.error("OOPS! >>", error);
  }
};
// login()

const register = async() => {
   try {
     const result = await apiService.signUp({
       email: "abudarovich@gmail.com",
       password: "123qwe",
     });

     console.log(result);
   } catch (error) {
     console.error("OOPS! >>", error);
   }
}
register()