/*
Night pdf Dark mode for Pdfs    
Copyright (C) 2021  Advaith Madhukar

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; version 2
of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
import { contextBridge, ipcRenderer } from "electron";
import type { Keybinds, Keybind, ModifierKeyMap } from "../helpers/settings";

contextBridge.exposeInMainWorld("api", {
	GetVersion: async () => {
		return await ipcRenderer.invoke("GetVersion");
	},

	getFileName: async (filePath: string) => {
		return await ipcRenderer.invoke("getPath", filePath);
	},

	ResolvePath: async (filePath: string) => {
		return await ipcRenderer.invoke("ResolvePath", filePath);
	},

	openExternel: (url: string) => {
		ipcRenderer.send("openExternal", url);
	},

	GetSettings: () => {
		return ipcRenderer.invoke("GetSettings");
	},

	removeAllListeners: (ListenerType: string) => {
		ipcRenderer.removeAllListeners(ListenerType);
	},

	SetBind: (key: string, value: Keybinds) => {
		return ipcRenderer.send("SetBind", [key, value]);
	},
	SetSetting: (group: string, key: string, value: unknown) => {
		return ipcRenderer.send("SetSetting", [group, key, value]);
	},
	openNewPDF: (pdf: string) => {
		ipcRenderer.send("openNewPDF", pdf);
	},

	newWindow: (file: string) => {
		ipcRenderer.send("newWindow", file);
	},

	togglePrinting: (value: boolean) => {
		ipcRenderer.send("togglePrinting", value);
	},

	resizeWindow: (value: string) => {
		ipcRenderer.send("resizeWindow", value);
	},

	//biome-ignore lint/suspicious/noExplicitAny: we can pass Function here but vscode freaks out :/
	on: (eventName: string, callback: any) => {
		ipcRenderer.on(eventName, callback);
	},
	// for use in keybind display
	platform: process.platform,
});
