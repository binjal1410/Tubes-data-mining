// Standalone model parameters extracted from the trained models
export const MODEL_PARAMS = {
  "feature_names": [
    "school", "sex", "age", "address", "famsize", "Pstatus", "Medu", "Fedu", "Mjob", "Fjob",
    "reason", "guardian", "traveltime", "studytime", "failures", "schoolsup", "famsup", "paid",
    "activities", "nursery", "higher", "internet", "romantic", "famrel", "freetime", "goout",
    "Dalc", "Walc", "health", "absences"
  ],
  "categorical_features": [
    "school", "sex", "address", "famsize", "Pstatus", "Mjob", "Fjob", "reason", "guardian",
    "schoolsup", "famsup", "paid", "activities", "nursery", "higher", "internet", "romantic"
  ],
  "numerical_features": [
    "age", "Medu", "Fedu", "traveltime", "studytime", "failures", "famrel", "freetime", "goout",
    "Dalc", "Walc", "health", "absences"
  ],
  "scaling_mean": [
    16.736030828516377, 2.5028901734104045, 2.2928709055876686, 1.5491329479768785, 1.9402697495183043,
    0.22928709055876687, 3.907514450867052, 3.1695568400770715, 3.1734104046242773, 1.4932562620423893,
    2.277456647398844, 3.5394990366088632, 3.601156069364162
  ],
  "scaling_scale": [
    1.2452887892398463, 1.1376764211279624, 1.1117550415230746, 0.7507184867138992, 0.8387856648689969,
    0.6140845846596243, 0.9732062632909357, 1.0761730151432796, 1.1830474540700098, 0.9183700029226285,
    1.2962419690552398, 1.4445034147153522, 4.576988455995572
  ],
  "logistic_regression": {
    "coefficients": [
      -2.1374030070515353, -0.3063436792171719, 0.3354522530052058, 0.17950179624219625, 0.411356496127819,
      0.33965743112595836, 0.22652855285728865, 0.09181578371969601, 0.06716683960374559, -0.32698395891293147,
      0.1270076157485797, -0.5652266212869635, 0.22329179133398372, 0.06533096847644235, -0.7122139109164305,
      -0.13537088581953718, 0.25669455049442835, -0.6591933637785735, 0.3129286106845994, -0.3549249626611267,
      1.4363832636893816, -0.1956644223940829, -0.29656592968326184, 0.05801469997032438, -0.17385533301375453,
      -0.13604206699765387, 0.016786757880339277, -0.2596988720911388, 0.05629659468608481, -0.3820516437309185
    ],
    "intercept": 2.7845941933832594
  },
  "naive_bayes": {
    "class_prior": [0.15414258188824662, 0.8458574181117534],
    "theta": [
      [
        0.6875, 0.4875, 0.31235258427168466, 0.575, 0.2375, 0.875, -0.4749946147909335, -0.38710947062409706,
        1.525, 2.2125, 0.775, 0.975, 0.1510114031151148, -0.4056694859841799, 0.9904383282611702, 0.0625,
        0.55, 0.1, 0.45, 0.8, 0.6375, 0.65, 0.4625, -0.13616276000829383, 0.3186691685233059, 0.2654919667805107,
        0.32039781027386216, 0.30668915379348816, -0.0359978634035351, 0.2646595992718864
      ],
      [
        0.25740318906605925, 0.3917995444191344, -0.05692074428641095, 0.7357630979498861, 0.30751708428246016,
        0.8861047835990888, 0.0865593831054093, 0.07054386708411793, 1.9886104783599088, 2.2209567198177678,
        1.1799544419134396, 0.7949886104783599, -0.02751916229888176, 0.07392610222946364, -0.18048990036649917,
        0.12300683371298406, 0.6287015945330297, 0.05694760820045558, 0.5056947608200456, 0.8154897494305239,
        0.9453302961275627, 0.7767653758542141, 0.3416856492027335, 0.02481325922702381, -0.058071830254817096,
        -0.048381224014671376, -0.058386844696831766, -0.05588868406259459, 0.006559975107705648, -0.04822953973063989
      ]
    ],
    "var": [
      [
        0.2148437515480489, 0.24984375154804883, 1.1345359460430333, 0.24437500154804884, 0.1810937515480491,
        0.1093750015480489, 0.7425543378579819, 0.925238208059178, 1.3993750015480477, 0.6673437515480491,
        1.0493750015480485, 0.24937500154804865, 1.1508495140426145, 0.6609231357031424, 2.6149405248384907,
        0.058593751548048904, 0.2475000015480489, 0.0900000015480488, 0.24750000154804896, 0.16000000154804875,
        0.23109375154804895, 0.22750000154804872, 0.24859375154804925, 1.6358623383895357, 1.0791741339488379,
        1.1966577751801377, 1.591579607339712, 1.1125621311813616, 1.1621083295919266, 1.5813462773736768
      ],
      [
        0.1911467888727316, 0.2382926629601409, 0.9544638880222767, 0.19441576319312032, 0.21295032870492311,
        0.10092309762994989, 0.9983071612336926, 0.9813393823588601, 1.5420115104131897, 0.7826132092420757,
        1.5143134391080388, 0.27687693763700705, 0.9675973293518478, 1.0263361418840868, 0.4943648816270968,
        0.10787615412093854, 0.23343590111270485, 0.05370457966875162, 0.24996757124725116, 0.15046621955231482,
        0.05168092889898653, 0.17340092827632533, 0.22493656787968871, 0.880130976324232, 0.9636938743079448,
        0.9489770248963894, 0.870079021172723, 0.959223542338997, 0.9701794422220601, 0.8789694065648029
      ]
    ]
  }
};

const CATEGORY_MAPS = {
  school: { "GP": 0, "MS": 1 },
  sex: { "F": 0, "M": 1 },
  address: { "R": 0, "U": 1 },
  famsize: { "GT3": 0, "LE3": 1 },
  Pstatus: { "A": 0, "T": 1 },
  Mjob: { "at_home": 0, "health": 1, "other": 2, "services": 3, "teacher": 4 },
  Fjob: { "at_home": 0, "health": 1, "other": 2, "services": 3, "teacher": 4 },
  reason: { "course": 0, "home": 1, "other": 2, "reputation": 3 },
  guardian: { "father": 0, "mother": 1, "other": 2 },
  schoolsup: { "no": 0, "yes": 1 },
  famsup: { "no": 0, "yes": 1 },
  paid: { "no": 0, "yes": 1 },
  activities: { "no": 0, "yes": 1 },
  nursery: { "no": 0, "yes": 1 },
  higher: { "no": 0, "yes": 1 },
  internet: { "no": 0, "yes": 1 },
  romantic: { "no": 0, "yes": 1 }
};

// Preprocess input variables
export function preprocessInputs(formData) {
  return MODEL_PARAMS.feature_names.map(name => {
    const val = formData[name];
    if (MODEL_PARAMS.numerical_features.includes(name)) {
      const numIdx = MODEL_PARAMS.numerical_features.indexOf(name);
      const mean = MODEL_PARAMS.scaling_mean[numIdx];
      const scale = MODEL_PARAMS.scaling_scale[numIdx];
      return (val - mean) / scale;
    } else {
      return CATEGORY_MAPS[name]?.[val] ?? 0;
    }
  });
}

// Predict passing status using Logistic Regression
export function predictLogisticRegression(xVec) {
  const coefs = MODEL_PARAMS.logistic_regression.coefficients;
  const intercept = MODEL_PARAMS.logistic_regression.intercept;
  
  let z = intercept;
  for (let i = 0; i < xVec.length; i++) {
    z += coefs[i] * xVec[i];
  }
  
  const prob = 1 / (1 + Math.exp(-z));
  return {
    probability: prob,
    passed: prob >= 0.5 ? 1 : 0
  };
}

// Predict passing status using Gaussian Naive Bayes
export function predictNaiveBayes(xVec) {
  const prior = MODEL_PARAMS.naive_bayes.class_prior;
  const theta = MODEL_PARAMS.naive_bayes.theta;
  const varArray = MODEL_PARAMS.naive_bayes.var;

  // Initial log likelihood scores using prior probabilities
  let logScores = [Math.log(prior[0]), Math.log(prior[1])];

  for (let c = 0; c < 2; c++) {
    for (let i = 0; i < xVec.length; i++) {
      const val = xVec[i];
      const mean = theta[c][i];
      const variance = varArray[c][i];
      const diff = val - mean;
      
      // Calculate Gaussian likelihood PDF in log space
      const logPdf = -0.5 * Math.log(2 * Math.PI * variance) - (diff * diff) / (2 * variance);
      logScores[c] += logPdf;
    }
  }

  // Softmax calculation using max shift for numerical stability
  const maxScore = Math.max(logScores[0], logScores[1]);
  const expScores = [Math.exp(logScores[0] - maxScore), Math.exp(logScores[1] - maxScore)];
  const prob = expScores[1] / (expScores[0] + expScores[1]);

  return {
    probability: prob,
    passed: prob >= 0.5 ? 1 : 0
  };
}
