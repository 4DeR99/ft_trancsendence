import React, { use, useEffect } from 'react';
import { User, Message, Channel, ChatType } from '@/app/types';
import { useState } from 'react';
import ChannelsList from './ChannelsList';

const Chat = ( {user}:{user: User | null} ) => {
	const [channels, setChannels] = useState<Channel[]>([]);
	const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

	useEffect(() => {
		const fetchChannels = async () => {
			// await fetch("/api/channels")
			// 	.then((res) => res.json())
			// 	.then((data) => setChannels(data));
			const message : Message = {
				id: "1",
				content: "Hello world!",
				channelId: "1",
				userId: "1",
				createdAt: new Date()
			}
			const channel : Channel = {
				id: "1",
				name: "General",
				directMessage: false,
				type: ChatType.PUBLIC,
				moderatorId: "1",
				createdAt: new Date(),
				messages: [message],
				members: [],
				memberCount: 1,
				memberLimit: 100
			}
			const user : User = {
				id: "1",
				firstName: "John",
				lastName: "Doe",
				userName: "johndoe",
				email: "",
				cover: "",
				twoFactorAuth: false,
				channels: [channel]
			}
			updateChannels(user.channels);
		}
		fetchChannels();
	}, [channels]);

	const updateChannels = (channels : Channel[]) => {
		setChannels(channels)
	}
	const updateSelectedChannel = (channel : Channel) => {
		setSelectedChannel(channel)
		console.log(channel)
	}

	return (
		<div className="flex flex-col w-[60rem] h-[60rem] rounded-[25px] bg-[#33437D]">
			<div className="flex border-b">
				<div className="flex pl-[2rem] items-center text-2xl text-white w-[15rem] h-[4rem] border-r">
					Chat room
				</div>
				<div className="w-[45rem]"></div>
			</div>
			<div className="">
				<div className="w-[15rem] h-[55.8rem] border-r">
					<ChannelsList
						channels={channels}
						updateSelectedChannel={updateSelectedChannel}
					/>
				</div>
				<div className="w-[45rem]"></div>
			</div>
		</div>
	)
};


export default Chat;