import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h5 className="text-light">
        It seems you are on wrong page,Go to{" "}
        <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
          Homepage
        </button>
      </h5>
    </div>
  );
}
