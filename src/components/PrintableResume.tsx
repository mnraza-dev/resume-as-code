import React from 'react';
import ResumePreview from './ResumePreview';

interface PrintableResumeProps {
  jsonData: string;
}

const PrintableResume = React.forwardRef<HTMLDivElement, PrintableResumeProps>(
  ({ jsonData }, ref) => {
    return (
      <div ref={ref} className="p-8 bg-white text-black w-[794px] h-[1123px]">
        {/* A4 size in pixels at 96 DPI */}
        <ResumePreview jsonData={jsonData} />
      </div>
    );
  }
);

PrintableResume.displayName = 'PrintableResume';
export default PrintableResume;
