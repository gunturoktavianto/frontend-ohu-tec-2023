import mongoose, { Schema } from "mongoose";

const bundleSchema = new Schema({
  emailBundle: {
    type: String,
    required: true,
  },

  namaBundle: {
    type: String,
    required: true,
  },

  nimBundle: {
    type: String,
    required: true,
  },

  fakultasBundle: {
    type: String,
    required: true,
  },

  jurusanBundle: {
    type: String,
    required: true,
  },

  idLineBundle: {
    type: String,
    required: true,
  },

  buktiBayarBundle: {
    type: String,
    required: true,
  },

  buktiPersyaratanBundle: {
    type: String,
    required: true,
  },
});

const Bundle =
  mongoose.models.Bundle || mongoose.model("Bundle", bundleSchema);

export default Bundle;