<template>
  <div>

    <br>

    <table>
      <thead>
        <tr><td>Date</td><td>Tags</td></tr>
      </thead>
      <tbody>
        <tr
          v-for="(day, idx) in til"
          :key="idx+'summary'"
          @click="go(day[0])">
          <td>{{ day[0] }}</td>
          <td>
            <span
              class="badge"
              v-for="(tag, i) in day[1]"
              :key="day[0]+i+'tag'">
              {{ tag }}&nbsp; &nbsp;
            </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      til: [
        [ "0308", ["RNN", "LSTM", "GRU"] ],
        [ "0307", ["Bag of Words", "Word2Vec", "GloVe"] ],
        [ "0222", ["baseline"] ],
        [ "0221", ["EDA"] ],
        [ "0218", ["Docker 로 MLflow 사용해보기"] ],
        [ "0215", ["MLflow", "서비스 모델 개발", "저작권"] ],
        [ "0214", ["머신러닝 프로젝트 Flow", "Linux", "Shell Command", "Docker"] ],
        [ "0211", ["Polar Coordinate", "Pie Charts", "missingno", "squarify", "PyWaffle", "pyvenn"] ],
        [ "0210", ["Generative Model"] ],
        [ "0209", ["transformer"] ],
        [ "0208", ["Convolution", "1x1 Convolution", "Semantic Segmentation", "Object Detectoin", "RNN", "LSTM", "GRU"] ],
        [ "0207", ["Deep Learning", "Optimization", "Gradient Descent Methods", "Regularization"] ],
        [ "0204", ["Text", "Color", "Facet", "Seaborn"] ],
        [ "0203", ["Matplotlib", "Bar Plot", "Line Plot", "Scatter Plot"] ],
        // [ "0128", [""] ],
        [ "0127", ["Multi-GPU", "Hyperparameter_Tuning", "Troubleshooting"] ],
        [ "0126", ["Save & Load", "Transfer_learning", "Monitoring"] ],
        [ "0125", ["Module", "Parameter", "AutoGrad", "Dataset", "DataLoader", "HuggingFace", "Albumentations"] ],
        [ "0124", ["DCG", "Tensor", "AutoGrad", "Colab_VSCode"] ],
        [ "0121", ["조건부확률", "베이즈정리", "기대값", "중심극한정리", "MLE", "쿨백-라이블러"] ],
        [ "0120", ["vector", "norm", "matrix", "gradient_descent", "SGD"] ],
        [ "0119", ["numpy", "empty", "pandas", "groupby"] ],
        [ "0118", ["python", "tuple", "dictionary", "%timeit", "reduce", "generator", "decorator", "pathlib", "pickle", "argparser"] ],
        [ "0117", ["python", "call_by_object_reference", "object_memory"] ],
      ]
    }
  },
  methods: {
    go(day) {
      this.$router.push(`/AI/Boostcamp-AI-Tech/${day}.html`)
    }
  }
}
</script>

<style scoped>
table { display: table; width: 100%; }
thead tr { background-color: #3eaf7c; font-weight: bold; text-align: center; }
tbody tr { background-color: #f0f0f0; }
tbody tr td:first-child { text-align: center; }
tr { border: 0; }
td { border: 0; }
tbody tr:hover { 
  cursor: pointer;
  background-color: rgba(62, 175, 124, .4);
  transition-duration: .25s;
}

.badge:hover {
  color: #2454ff;
  font-weight: bold;
  transition-duration: .25s;
}
</style>