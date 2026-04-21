import { motion } from 'motion/react';
import { Smartphone, QrCode, ArrowDown } from 'lucide-react';

export default function AppDownloadCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="absolute bottom-12 lg:bottom-20 right-6 lg:right-16 max-w-md w-full"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-[20px] p-6 shadow-2xl">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#60a5fa] to-[#2563eb] flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-[#0f0f0f] mb-1">Télécharger l'app</h4>
            <p className="text-xs text-[#6b7280] mb-3">Scannez ou cliquez pour installer</p>
            
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f0f0f] text-white text-xs font-medium hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.03 0-1.14.57-1.98.45-2.83.05-.96-.46-1.96-.38-3.06.35-1.13.75-2.12.62-3.01-.3C.23 16.5.08 15.25.08 14c0-2.08 1.66-3.2 4.03-3.2.93 0 1.72.37 2.47.98.72.58 1.44 1.22 2.71 1.22 1.15 0 1.82-.56 2.55-1.23.74-.68 1.47-1.34 2.64-1.34 2.28 0 4.13 1.85 4.13 4.27 0 1.32-.5 2.2-1.33 3.03-.79.78-1.91 1.49-3.22 1.49-.52 0-.82-.1-1.18-.35-.75-.52-1.64-.68-2.7-.68-1.88 0-3.86 1.1-4.56 2.28-.53.88-.28 2.05.68 3.08 1.07 1.15 2.49 1.7 4.04 1.7 1.96 0 3.18-.71 4.14-1.71.95-.98.75-2.54.02-3.54l-.02.02z"/>
                </svg>
                App Store
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f0f0f] text-white text-xs font-medium hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.186.165-.437.184-.609-.046-.176-.237-.105-.469.146-.534l2.403-.576.683-2.698c.158-.686.026-1.052-.383-1.318-.394-.258-.945-.304-1.378-.115l-2.592 1.136c-.417-.326-.798-.567-1.317-.773l.23-2.44c.117-.845.352-1.378 1.002-1.83.65-.457 1.458-.489 2.013-.332l2.242.544c.433-.312.885-.488 1.342-.608L8.06 9.7c-.253-.152-.498-.243-.738-.319l2.476-1.93c.476-.371.856-.483 1.334-.408.469.074.676.372.792.904l.664 2.437c.085.312.185.623.339.913l1.864-1.487c.322-.258.729-.342 1.061-.227.34.117.502.412.548.819l.928 3.493c.05.188.012.406-.127.568-.144.167-.361.217-.552.163l-2.532-.613c-.424.297-.873.517-1.366.658l.534 2.368c.126.558-.057 1.052-.493 1.327-.429.27-.965.264-1.397.057l-2.577-1.231c-.48.258-.989.408-1.515.463l.123 2.447c.082.611-.142 1.114-.621 1.404-.48.289-1.084.255-1.572-.063L6.01 21.03c-.46.31-.973.385-1.477.28-.5-.102-.814-.421-.918-.918-.105-.501.028-1.028.388-1.487l1.03-1.308c-.304-.235-.573-.508-.776-.814l-2.26.943c.105-.343.293-.629.56-.858.441-.379.99-.455 1.448-.243l2.237 1.038c.433-.339.893-.601 1.398-.77l-.578-2.358c-.108-.441-.018-.829.275-1.167.449-.519 1.126-.545 1.669-.108l2.32 1.866c-.298.265-.629.487-.998.653l.893-2.603c.128-.374.073-.729-.164-1.004-.237-.275-.601-.342-.946-.193l-2.48 1.075c-.442.19-.916.219-1.396.093zm6.515 8.603c-.577 1.389-1.387 2.726-1.387 2.726s.593-.389 1.553-1.016c1.105-.721 2.157-.965 2.157-.965s-1.167.708-2.323.708c-.96 0-1.697-.443-2.157-1.05l.157.597zm1.783-2.985c.442.254 1.173.414 1.173.414s.097-.641-.237-1.173c-.377-.6-1.154-.865-1.154-.865s.538.328 1.006.738c.323.283.548.692.548.692s.108-.577-.168-1.058c-.378-.659-.952-1.067-1.546-1.067-.593 0-.97.408-1.156.965-.107.318-.118.629-.118.629s.083-.092.184-.206c.233-.264.608-.494 1.082-.494.475 0 .727.258.727.577s-.235.575-.607.906l.844.534z"/>
                </svg>
                Play Store
              </button>
            </div>
          </div>
          
          <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
            <QrCode className="w-10 h-10 text-[#2563eb]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}