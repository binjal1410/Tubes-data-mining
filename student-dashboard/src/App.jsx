import React, { useState } from 'react';
import { 
  MODEL_PARAMS, 
  preprocessInputs, 
  predictLogisticRegression, 
  predictNaiveBayes 
} from './predictor';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Predictor form state pre-populated with student averages
  const [formData, setFormData] = useState({
    school: 'GP', sex: 'F', age: 17, address: 'U', famsize: 'GT3', Pstatus: 'T',
    Medu: 3, Fedu: 2, Mjob: 'other', Fjob: 'other', reason: 'home', guardian: 'mother',
    traveltime: 1, studytime: 2, failures: 0, schoolsup: 'no', famsup: 'yes',
    paid: 'no', activities: 'no', nursery: 'yes', higher: 'yes', internet: 'yes',
    romantic: 'no', famrel: 4, freetime: 3, goout: 3, Dalc: 1, Walc: 2, health: 4, absences: 3
  });

  const [predictionResults, setPredictionResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: MODEL_PARAMS.numerical_features.includes(name) ? Number(value) : value
    }));
  };

  const handlePredict = (e) => {
    e.preventDefault();
    const xVec = preprocessInputs(formData);
    const lrResult = predictLogisticRegression(xVec);
    const nbResult = predictNaiveBayes(xVec);

    setPredictionResults({
      lr: { probability: lrResult.probability * 100, passed: lrResult.passed },
      nb: { probability: nbResult.probability * 100, passed: nbResult.passed }
    });
  };

  return (
    <div className="min-height-screen bg-[#04060a] text-[#f1f5f9] p-6 md:p-12 font-sans relative selection:bg-cyan-500 selection:text-black">
      
      {/* Structural Framing Line (Edward Hopper Inspired Scenography) */}
      <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto md:pl-6">
        
        {/* Header - Robert Wilson Dramatic Contrast */}
        <header className="border-b-2 border-[#0e131f] pb-8 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-slate-500 tracking-[0.2em] uppercase">AUDIT // STUDENT_PERFORMANCE_ANALYTICS</span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-2">
              AURAPREDICT <span className="text-cyan-500 font-light">//</span> ARCHIVE
            </h1>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#0e131f] p-3 border border-slate-800 self-start">
            ENV_STATE: <span className="text-emerald-500 font-bold">READY</span><br />
            TARGET_RUN: <span className="text-amber-500 font-bold">student-por.csv</span>
          </div>
        </header>

        {/* Tab Selector - Digital Brutalism Blueprint Tags */}
        <div className="flex flex-wrap gap-2 mb-10 border-b-2 border-[#0e131f] pb-4">
          {[
            { id: 'overview', num: '01', label: 'OVERVIEW' },
            { id: 'supervised', num: '02', label: 'SUPERVISED_LEARNING' },
            { id: 'unsupervised', num: '03', label: 'UNSUPERVISED_CLUSTERING' },
            { id: 'predictor', num: '04', label: 'PERFORMANCE_SIMULATOR' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-mono text-sm px-6 py-3 rounded-none border-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-black border-white font-bold shadow-[4px_4px_0px_#06b6d4]'
                  : 'bg-[#06080e] text-slate-400 border-[#0e131f] hover:text-white hover:border-slate-700'
              }`}
            >
              [{tab.num}] {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <main className="min-h-[500px]">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="fade-in space-y-10">
              {/* KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Dataset Records', val: '649', label: 'STUDENT_ROWS', theme: 'cyan' },
                  { title: 'Shielded Features', val: 'G1, G2, G3', label: 'LEAKAGE_SHIELD', theme: 'amber' },
                  { title: 'General Pass Rate', val: '84.6%', label: 'G3_MIN_GRADE_10', theme: 'emerald' },
                  { title: 'Input Dimensions', val: '30 Variables', label: 'PREPROCESSED_VEC', theme: 'rose' }
                ].map((kpi, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-[#06080e] border-2 border-[#0e131f] p-6 rounded-none relative overflow-hidden ${
                      kpi.theme === 'cyan' ? 'hopper-shadow-cyan' : kpi.theme === 'amber' ? 'hopper-shadow-amber' : 'hopper-shadow'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-slate-500 block">{kpi.label}</span>
                    <p className="font-display text-xs text-slate-400 font-bold uppercase mt-2">{kpi.title}</p>
                    <h2 className="text-2xl font-black text-white mt-2 tracking-tight font-mono">{kpi.val}</h2>
                  </div>
                ))}
              </div>

              {/* Scenography Quote Card */}
              <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow">
                <span className="font-mono text-xs text-cyan-500">// ARCHIVAL_STATEMENT</span>
                <p className="text-slate-300 mt-4 leading-relaxed font-light max-w-4xl text-sm italic font-mono">
                  {"Sistem klasifikasi ini beroperasi di bawah kerangka kerja CRISP-DM secara modular. Untuk meminimalkan potensi bias dan kebocoran informasi masa depan (Data Leakage), fitur nilai tengah semester (G1) dan nilai akhir semester (G2) telah dipotong sepenuhnya. Inference engine diatur untuk memprediksi probabilitas kelulusan akhir semester (G3 \u2265 10) murni berbasis variabel sosio-demografis dan kebiasaan belajar siswa."}
                </p>
              </div>
            </div>
          )}

          {/* SUPERVISED TAB */}
          {activeTab === 'supervised' && (
            <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Logistic Regression Card */}
              <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow-cyan">
                <div className="flex justify-between items-start border-b border-[#0e131f] pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-500">MODEL_01 // PARAMETRIC</span>
                    <h3 className="text-lg font-bold uppercase mt-1">Logistic Regression</h3>
                  </div>
                  <span className="font-mono text-2xl font-black text-cyan-500">76.9%</span>
                </div>
                
                {/* SVG Performance Chart */}
                <div className="bg-[#04060a] p-4 border border-[#0e131f] mb-6">
                  <span className="font-mono text-[10px] text-slate-500 block mb-2">METRIC_BAR_CHART</span>
                  <svg className="w-full h-32" viewBox="0 0 400 120">
                    {/* Grid lines */}
                    <line x1="100" y1="10" x2="100" y2="110" stroke="#0e131f" strokeWidth="1" />
                    <line x1="250" y1="10" x2="250" y2="110" stroke="#0e131f" strokeWidth="1" />
                    {/* Labels */}
                    <text x="10" y="30" fill="#64748b" className="font-mono text-[10px]">ACCURACY</text>
                    <text x="10" y="65" fill="#64748b" className="font-mono text-[10px]">PRECISION</text>
                    <text x="10" y="100" fill="#64748b" className="font-mono text-[10px]">RECALL</text>
                    {/* Bars */}
                    <rect x="100" y="18" width={300 * 0.7692} height="15" fill="#06b6d4" />
                    <rect x="100" y="53" width={300 * 0.8509} height="15" fill="#06b6d4" />
                    <rect x="100" y="88" width={300 * 0.8818} height="15" fill="#06b6d4" />
                    {/* Value text */}
                    <text x="310" y="30" fill="#ffffff" className="font-mono text-[10px]">76.92%</text>
                    <text x="310" y="65" fill="#ffffff" className="font-mono text-[10px]">85.09%</text>
                    <text x="310" y="100" fill="#ffffff" className="font-mono text-[10px]">88.18%</text>
                  </svg>
                </div>

                <div className="font-mono text-xs text-slate-400 space-y-2">
                  <p className="font-bold border-b border-[#0e131f] pb-2 text-white">CONFUSION_MATRIX:</p>
                  <p>TN: 3  | FP: 17</p>
                  <p>FN: 13 | TP: 97</p>
                </div>
              </div>

              {/* Naive Bayes Card */}
              <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow-amber">
                <div className="flex justify-between items-start border-b border-[#0e131f] pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-amber-500">MODEL_02 // PROBABILISTIC</span>
                    <h3 className="text-lg font-bold uppercase mt-1">Gaussian Naïve Bayes</h3>
                  </div>
                  <span className="font-mono text-2xl font-black text-amber-500">76.1%</span>
                </div>

                {/* SVG Performance Chart */}
                <div className="bg-[#04060a] p-4 border border-[#0e131f] mb-6">
                  <span className="font-mono text-[10px] text-slate-500 block mb-2">METRIC_BAR_CHART</span>
                  <svg className="w-full h-32" viewBox="0 0 400 120">
                    {/* Grid lines */}
                    <line x1="100" y1="10" x2="100" y2="110" stroke="#0e131f" strokeWidth="1" />
                    <line x1="250" y1="10" x2="250" y2="110" stroke="#0e131f" strokeWidth="1" />
                    {/* Labels */}
                    <text x="10" y="30" fill="#64748b" className="font-mono text-[10px]">ACCURACY</text>
                    <text x="10" y="65" fill="#64748b" className="font-mono text-[10px]">PRECISION</text>
                    <text x="10" y="100" fill="#64748b" className="font-mono text-[10px]">RECALL</text>
                    {/* Bars */}
                    <rect x="100" y="18" width={300 * 0.7615} height="15" fill="#f59e0b" />
                    <rect x="100" y="53" width={300 * 0.8835} height="15" fill="#f59e0b" />
                    <rect x="100" y="88" width={300 * 0.8273} height="15" fill="#f59e0b" />
                    {/* Value text */}
                    <text x="310" y="30" fill="#ffffff" className="font-mono text-[10px]">76.15%</text>
                    <text x="310" y="65" fill="#ffffff" className="font-mono text-[10px]">88.35%</text>
                    <text x="310" y="100" fill="#ffffff" className="font-mono text-[10px]">82.73%</text>
                  </svg>
                </div>

                <div className="font-mono text-xs text-slate-400 space-y-2">
                  <p className="font-bold border-b border-[#0e131f] pb-2 text-white">CONFUSION_MATRIX:</p>
                  <p>TN: 8  | FP: 12</p>
                  <p>FN: 19 | TP: 91</p>
                </div>
              </div>

            </div>
          )}

          {/* UNSUPERVISED TAB */}
          {activeTab === 'unsupervised' && (
            <div className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Cluster 0 Panel */}
              <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow">
                <span className="font-mono text-xs text-slate-500">SEGMENTATION // CLUSTER_0</span>
                <h3 className="text-xl font-bold uppercase mt-2 text-white">High Academic Achievement</h3>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                  Siswa yang berada pada cluster ini memiliki intensitas belajar tinggi, tingkat kegagalan nyaris nol, serta performa nilai ujian yang sangat stabil pada nilai sedang hingga tinggi.
                </p>
                <div className="mt-8 border-t border-[#0e131f] pt-4 font-mono text-xs text-slate-300 space-y-3">
                  <div className="flex justify-between"><span className="text-slate-500">RATA_RATA_BELAJAR:</span><span className="text-cyan-500 font-bold">2.20 / 4 (2-5 Jam/Minggu)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">RIWAYAT_KEGAGALAN:</span><span className="text-cyan-500 font-bold">0.01 Kali</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">RATA_RATA_UTS_UAS:</span><span className="text-cyan-500 font-bold">14.10 / 20</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">JUMLAH_SISWA:</span><span className="text-cyan-500 font-bold">345 Siswa</span></div>
                </div>
              </div>

              {/* Cluster 1 Panel */}
              <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow">
                <span className="font-mono text-xs text-slate-500">SEGMENTATION // CLUSTER_1</span>
                <h3 className="text-xl font-bold uppercase mt-2 text-white">At-Risk Academic Profile</h3>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                  Siswa yang dikelompokkan pada cluster ini memiliki jam belajar yang rendah, riwayat kegagalan yang tinggi, serta rata-rata nilai ujian yang berada di bawah ambang kelulusan standar.
                </p>
                <div className="mt-8 border-t border-[#0e131f] pt-4 font-mono text-xs text-slate-300 space-y-3">
                  <div className="flex justify-between"><span className="text-slate-500">RATA_RATA_BELAJAR:</span><span className="text-amber-500 font-bold">1.63 / 4 (&lt; 2 Jam/Minggu)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">RIWAYAT_KEGAGALAN:</span><span className="text-amber-500 font-bold">0.46 Kali</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">RATA_RATA_UTS_UAS:</span><span className="text-amber-500 font-bold">9.42 / 20</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">JUMLAH_SISWA:</span><span className="text-amber-500 font-bold">304 Siswa</span></div>
                </div>
              </div>

            </div>
          )}

          {/* PREDICTOR TAB */}
          {activeTab === 'predictor' && (
            <div className="fade-in grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Form Input */}
              <div className="lg:col-span-2 bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow">
                <span className="font-mono text-xs text-slate-500 block mb-6">// INTERACTIVE_INPUT_FIELDS</span>
                <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="form-group">
                    <label>Age (Tahun)</label>
                    <input className="form-input rounded-none" type="number" name="age" min="15" max="22" value={formData.age} onChange={handleInputChange} required />
                  </div>

                  <div className="form-group">
                    <label>Study Time (Jam Belajar Mingguan)</label>
                    <select className="form-select rounded-none" name="studytime" value={formData.studytime} onChange={handleInputChange}>
                      <option value="1">&lt; 2 Jam</option>
                      <option value="2">2 - 5 Jam</option>
                      <option value="3">5 - 10 Jam</option>
                      <option value="4">&gt; 10 Jam</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Past Failures (Jumlah Kegagalan Lalu)</label>
                    <input className="form-input rounded-none" type="number" name="failures" min="0" max="3" value={formData.failures} onChange={handleInputChange} required />
                  </div>

                  <div className="form-group">
                    <label>Absences (Jumlah Ketidakhadiran)</label>
                    <input className="form-input rounded-none" type="number" name="absences" min="0" max="99" value={formData.absences} onChange={handleInputChange} required />
                  </div>

                  <div className="form-group">
                    <label>Medu (Tingkat Pendidikan Ibu)</label>
                    <select className="form-select rounded-none" name="Medu" value={formData.Medu} onChange={handleInputChange}>
                      <option value="0">Tidak Ada</option>
                      <option value="1">SD (Kelas 4)</option>
                      <option value="2">SMP (Kelas 9)</option>
                      <option value="3">SMA</option>
                      <option value="4">Perguruan Tinggi</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Schoolsup (Dukungan Tambahan Sekolah)</label>
                    <select className="form-select rounded-none" name="schoolsup" value={formData.schoolsup} onChange={handleInputChange}>
                      <option value="no">Tidak Ada</option>
                      <option value="yes">Ada</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Higher Education (Keinginan Kuliah)</label>
                    <select className="form-select rounded-none" name="higher" value={formData.higher} onChange={handleInputChange}>
                      <option value="yes">Ya</option>
                      <option value="no">Tidak</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Romantic (Hubungan Romantis)</label>
                    <select className="form-select rounded-none" name="romantic" value={formData.romantic} onChange={handleInputChange}>
                      <option value="no">Tidak</option>
                      <option value="yes">Ya</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="btn-primary rounded-none w-full hover:shadow-cyan-500/25">
                      Hitung Probabilitas Kelulusan
                    </button>
                  </div>

                </form>
              </div>

              {/* Form Output */}
              <div className="flex flex-col gap-6">
                <div className="bg-[#06080e] border-2 border-[#0e131f] p-8 rounded-none hopper-shadow-cyan flex-1 flex flex-col justify-center">
                  <h3 className="text-center font-mono text-sm text-slate-400 mb-8 border-b border-[#0e131f] pb-4 uppercase">
                    Hasil Prediksi Inferensi
                  </h3>
                  
                  {predictionResults ? (
                    <div className="space-y-8">
                      {/* Logistic Regression Output */}
                      <div className="text-center">
                        <span className="font-mono text-[10px] text-slate-500 block uppercase">LOGISTIC_REGRESSION_PROB</span>
                        <h2 className="text-4xl font-mono font-black mt-2 tracking-tight">
                          {predictionResults.lr.probability.toFixed(2)}%
                        </h2>
                        <span className={`inline-block font-mono text-[10px] mt-4 px-3 py-1 border ${
                          predictionResults.lr.passed 
                            ? 'bg-emerald-950/30 text-emerald-400 border-emerald-900/50' 
                            : 'bg-rose-950/30 text-rose-400 border-rose-900/50'
                        }`}>
                          {predictionResults.lr.passed ? 'LULUS (PASS)' : 'RAWAN (FAIL)'}
                        </span>
                      </div>

                      {/* Naive Bayes Output */}
                      <div className="text-center border-t border-[#0e131f] pt-8">
                        <span className="font-mono text-[10px] text-slate-500 block uppercase">NAIVE_BAYES_PROB</span>
                        <h2 className="text-4xl font-mono font-black mt-2 tracking-tight">
                          {predictionResults.nb.probability.toFixed(2)}%
                        </h2>
                        <span className={`inline-block font-mono text-[10px] mt-4 px-3 py-1 border ${
                          predictionResults.nb.passed 
                            ? 'bg-emerald-950/30 text-emerald-400 border-emerald-900/50' 
                            : 'bg-rose-950/30 text-rose-400 border-rose-900/50'
                        }`}>
                          {predictionResults.nb.passed ? 'LULUS (PASS)' : 'RAWAN (FAIL)'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center italic text-xs leading-relaxed font-light">
                      Masukkan nilai parameter siswa di sebelah kiri dan kirim form untuk melihat analisis probabilitas kelulusan instan.
                    </p>
                  )}
                </div>
              </div>

            </div>
          )}

        </main>

      </div>
    </div>
  );
}
