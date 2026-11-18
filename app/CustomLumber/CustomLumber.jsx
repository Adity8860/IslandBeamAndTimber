import CustomLumberHero from "@/Components/Ui/ServiceHro.jsx";
import CustomLumberContent from "@/Components/Ui/CustomLumberContent.jsx";
import { customLumberData } from "@/lib/CustomLumberConst.js";

export default function CustomLumber() {
    return (
        <div className="font-sans leading-relaxed text-[#073d28]">
            <CustomLumberHero data={customLumberData} />
            <CustomLumberContent />
        </div>
    );
}
