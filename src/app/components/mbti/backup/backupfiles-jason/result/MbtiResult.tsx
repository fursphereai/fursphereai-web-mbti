'use client';

import { useEffect, useState, useRef } from "react";

interface MbtiResultProps {
  handleNext: () => void;
  surveyData: any;
}

const MbtiResult: React.FC<MbtiResultProps> = ({ handleNext, surveyData }) => {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(true);
  const wsRef = useRef<WebSocket | null>(null);
  const retryCount = useRef(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    const connectWebSocket = () => {
      if (wsRef.current) {
        wsRef.current.close();
      }

      wsRef.current = new WebSocket("ws://localhost:8765");

      wsRef.current.onopen = () => {
        console.log("✅ WebSocket connected");
        setIsConnecting(false);
        setError(null);
        
        // Send the survey data to process
        
          wsRef.current?.send("2");
        
      };

      wsRef.current.onmessage = (event) => {
        try {
          // The server sends back a doubled number
          const processedValue = parseFloat(event.data);
          console.log("📩 Received result:", processedValue);
          setResult(processedValue);
        } catch (err) {
          console.error("⚠️ Failed to parse data:", err);
          setError("Failed to process server response");
        }
      };

      wsRef.current.onerror = () => {
        console.error("❌ WebSocket error");
        setError("Connection error - Please check if the server is running");
        setIsConnecting(false);
      };

      wsRef.current.onclose = () => {
        console.log("⚠️ WebSocket closed");
        setIsConnecting(false);
        if (retryCount.current < MAX_RETRIES) {
          retryCount.current += 1;
          setTimeout(connectWebSocket, 2000);
        } else {
          setError("Failed to connect after multiple attempts. Please refresh the page.");
        }
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [surveyData]);

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg">
        Processing Results
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg">
        {isConnecting ? (
          <div className="text-blue-600">
            <p>Connecting to server...</p>
          </div>
        ) : error ? (
          <div className="text-red-500">
            <p>{error}</p>
            <p className="text-sm mt-2">Please make sure the WebSocket server is running</p>
          </div>
        ) : result !== null ? (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">Original Value:</p>
              <p className="text-xl font-bold">{surveyData}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600">Processed Result:</p>
              <p className="text-xl font-bold text-blue-600">{result}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Waiting for data...</p>
        )}
        
        <button 
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MbtiResult;