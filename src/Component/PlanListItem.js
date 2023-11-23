import React from "react";

const PlanListItem = ({ planName, price, Rating }) => {
    return (
        <div className="card h-100 shadow-lg">
            <div className="card body">
                <div className="Text-center p-3">
                <h5 className="card-title">{planName}</h5>
                <span className="h2">${price}</span>
                <span className="h2">⭐</span>
                <br /><br />
                </div>
            </div>
        </div>
    );
};

export default PlanListItem;