import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PasswordPage from './components/PasswordPage';
import MemoryPage from './components/MemoryPage';
import ProposalPage from './components/ProposalPage';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PasswordPage />} />
          <Route
  path="/memory/2"
  element={
    <MemoryPage
      pageNum={2}
      content={
        <>
          <span className="block text-2xl sm:text-3xl font-semibold text-black">
            "🙏Happy Mahashivratri🙏"
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black">
            thod bolaych hota..
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            ...
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            ky bolaych aahe te samajt nahi aahe..😔
          </span>
        </>
      }
    />
  }
/>
          <Route path="/memory/3" element={<MemoryPage pageNum={3} 
          content={
        <>
          <span className="block text-2xl sm:text-3xl font-semibold text-black">
            "SORRY..!" bolto pn
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            hai aasa abola nko please..🙏🙏
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            je kahi aahe te bolun sort karu..
          </span>
        </>
      } />} />

          <Route path="/memory/4" element={<MemoryPage pageNum={4}
            content={
        <>
          <span className="block text-2xl sm:text-3xl font-bold text-black">
            tu boln band kelas teva samajla
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            Attachment is not a joke
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-3">
            (Losing your favourite person can mentally destroy you no matters its "Friendship" or "Relationship")
          </span>
        </>
      } />} />

          <Route path="/memory/5" element={<MemoryPage pageNum={5} 
          content={
        <>
          <span className="block text-2xl sm:text-3xl font-semibold text-black">
            "Ek tuch hotis premane bolnari😢"
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-black mt-3">
            "Ani aata tu pn ignore kartey..💔"
          </span>
          <span className="block sm:text-1xl text-black mt-3">
            (Please chal me manusach chukica aahe pn mala maaf kar na..🙏 aani pahilya sarkhi bol na please.. )
          </span>
        </>
      } />} />

          <Route path="/memory/6" element={<MemoryPage pageNum={6}
            content={
        <>
          <span className="block text-2xl sm:text-3xl font-semibold text-black">
              "sorry..!"
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-3">
              Mala nyi mahiti ky chukich ani ky baribar, kon chukich kon barobar. Mala fakta yavdach mahiti aahe ki tu aani tuji smile donhi kup mahatvachi aahet majyasathi..💕 samjalch nyi tujyashi kdi etka attach zaalo ki mazi smile pn tujya smile vr depend houn geli te😞 chuk majich aahe tujya shi bolta bolta me maji maryadac visrun gelo..
          </span>
        </>
      } />} />

          <Route path="/memory/7" element={<MemoryPage pageNum={7} 
          content={
        <>
          <span className="block text-xl sm:text-1xl text-black mt-1">
            "Aata khup chuklya sarkh vattay ky bolu kasa bolu tey samajt nahi aahe..😔 "
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-1">
            "Kdi vichar kela nhavta ki kon sathi raden kiva etka trsen "
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-1">
            "Tujyashi khup kahi bolaych aahe pn..?😣. tu samjun gheshil ki nyi tyachi bheti vatte. You konw me life mde tujyashi jitka frank vaglo, bolo.. Tika eitar konashi he nyi. Pn haali tula mjya shi majyashi bolayla inseccure vatya. Mhanun hai sagla. Ani mala tula irriate nyi karaych aahe ....aani zal aasel tr soory"
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-1">
            "Mala aavadta tula pamper karayla..☺️"
          </span>
          <span className="block text-xl sm:text-1xl text-black mt-1">
            "But hopefully it can be my last message to you..😞"
          </span>
        </>
      } />} />

          <Route path="/memory/8" element={<ProposalPage />} />

          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;