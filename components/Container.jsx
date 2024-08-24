import cn from "@/common/helpers/UtilKit";

export default function Container({ children, className }) {
  return (
    <div className={cn("max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
}