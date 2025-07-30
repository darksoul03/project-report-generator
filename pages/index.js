export default function Home() {
    const downloadReport = () => {
      window.location.href = '/api/download-report';
    };
  
    return (
      <div style={{ padding: 20 }}>
        <h1>Project Report Generator</h1>
        <button onClick={downloadReport} style={{ padding: 10, fontSize: 16 }}>
          Download Report
        </button>
      </div>
    );
  }
  