import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxios/useAxiosSecure";
import HomeBanner from "../HomeBanner/HomeBanner";
import LearnersSection from "../LearnersSection/LearnersSection";
import WhyTS from "../WhyTS/WhyTS";

const Home = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const allLearners = users.filter(user => user.role === "learner");
    const numbersOfLearners = allLearners.length;

    return (
        <div>
            <HomeBanner></HomeBanner>
            <WhyTS></WhyTS>
            <LearnersSection numbersOfLearners={numbersOfLearners}></LearnersSection>
        </div>
    );
};

export default Home;