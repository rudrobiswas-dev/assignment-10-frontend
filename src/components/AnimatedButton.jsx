"use client";

export default function AnimatedButton({
  text = "Hover me",
  hoverText = "Hello!",
  className = "",
  ...props
}) {
  return (
    <button
      className={`animated-btn ${className}`}
      data-hover={hoverText}
      data-text={text}
      {...props}
    />
  );
}