import mongoose, { mongo } from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);
const TransactionSchema = new Schema(
  {
    buyer: {
      type: mongoose.Types.Currency,
      currecy: "USD",
      get: (v) => v / 100,
    },
    amount: {
      type: mongoose.Types.Currency,
      currecy: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = Transaction.model("TransactionSchema", TransactionSchema);
export default Transaction;
