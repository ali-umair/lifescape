import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="relative flex items-center justify-center min-h-screen overflow-hidden">
			{/* Glowing Circles Background */}
			<div className="absolute inset-0 overflow-hidden">
				<svg
					width="200"
					height="200"
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="4" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<circle
						cx="100"
						cy="100"
						r="50"
						fill="none"
						stroke="white"
						strokeWidth="5"
						filter="url(#glow)"
					/>
				</svg>
				<svg
					className="absolute bottom-20 right-20 w-60 h-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 200"
				>
					<defs>
						<filter
							id="glow-green"
							x="-50%"
							y="-50%"
							width="200%"
							height="200%"
						>
							<feGaussianBlur stdDeviation="5" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<circle
						cx="100"
						cy="100"
						r="60"
						fill="none"
						stroke="limegreen"
						strokeWidth="5"
						filter="url(#glow-green)"
					/>
				</svg>
				<svg
					className="absolute bottom-40 left-[35%] w-60 h-60"
					width="150"
					height="150"
					viewBox="0 0 150 150"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="3" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<circle
						cx="75"
						cy="75"
						r="40"
						fill="none"
						stroke="deepskyblue"
						stroke-width="4"
						filter="url(#glow-blue)"
					/>
				</svg>
			</div>

			{/* Login Card */}
			<Card className="w-[350px] z-10">
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Welcome back</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input id="email" placeholder="Enter your email" type="email" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									placeholder="Enter your password"
									type="password"
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button>Login</Button>
					<Link href={"/register"}>
						<Button variant="outline">Register</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
