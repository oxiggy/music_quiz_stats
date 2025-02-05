import { memo } from 'react';
import { motion } from "motion/react"
import GuessByRoundChart from '@/components/GuessByRoundChart/GuessByRoundChart.jsx';
import CaughtByRoundChart from '@/components/CaughtByRoundChart/CaughtByRoundChart.jsx';
import bgImage from '@/assets/images/noise.png';

function Dashboard() {
  return (
    <div className="w-full h-full">
      <motion.div
        className='w-full h-50'
        animate={{
          "--dotColor": [
            "#00d9b1", "#00c4ff", "#0048ff",
            "#bd24c7", "#ff0073", "#ff5c95", "#ff4d00", "#fd7120",
            "#ffea00", "#8cff00", "#00e52d",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
        style={{
          background: "radial-gradient(circle, var(--dotColor) 1.1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      >
        <div className='w-full h-50 bg-gradient-to-b from-transparent to-[#131313]'>
          <div className='font-["Orbitron"] text-white font-bold text-center text-7xl tracking-wider p-16'>
            STATISTICS
          </div>
        </div>
      </motion.div>
      <div className='pointer-events-none fixed inset-0'>
        <div className='size-full bg-repeat opacity-1' style={{ backgroundImage: `url(${bgImage})` }}></div>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 gap-6 px-4 py-8 w-full overflow-hidden'>
        <div className='grid gap-4 p-2 w-full overflow-hidden'>
          <GuessByRoundChart />
          <div className='font-["Orbitron"] uppercase tracking-wide text-white font-normal text-center text-md'>Guessing songs by rounds</div>
        </div>
        <div className='grid gap-4 p-2 w-full overflow-hidden'>
          <CaughtByRoundChart />
          <div className='font-["Orbitron"] uppercase tracking-wide text-white font-normal text-center text-md'>You Were Guessed by Rounds</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
