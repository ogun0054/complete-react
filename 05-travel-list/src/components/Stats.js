import React from "react";

export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>🧳 Your packing list is empty. Start adding items! 📝</em>{" "}
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // console.log(typeof percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You are ready to go! 🛫"
          : `💼 You have ${numItems} items your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
