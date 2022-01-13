import { Request, Response } from 'express';
import ListModel from '../../models/List';
import { apiUserId } from '../../bootstrap/environment';

async function getListData(_: Request, res: Response) {
  try {
    const lists = await ListModel.find({ steamid: apiUserId });
  } catch (err) {
    console.error(err);
  }
}

export default { getListData };

// export async function getUserFromDatabase() {
//   try {
//     const user = await UserModel.find({ steamid: API_USER_ID });
//     return user;
//   } catch (err) {
//     console.error(err);
//     throw new Error(FAILED_DATABASE_OPERATION);
//   }
// }


// import { getUserFromDatabase, getUserFromAPI } from './helper';

// let timeout: Number;

// async function getUserData(_: Request, res: Response) {
//   let user;
//   try {
//     // check if API call has been made recently
//     if (
//       timeout &&
//       timeout > Date.now()
//     ) {
//       user = await getUserFromDatabase();
//     } else {
//       user = await getUserFromAPI();

//       // set 30 min timeout (to reduce unecessary calls)
//       timeout = Date.now() + (1000 * 60 * 30);
//     }
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500); // internal server error
//   }

//   res.status(200)
//   res.send(user);
// }

// export default { getUserData };