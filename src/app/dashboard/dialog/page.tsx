'use client';
import { useRef, useState } from "react";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import { CopyIcon } from "@radix-ui/react-icons"

export default function Page() {
    const [openDialog, setOpenDialog] = useState(false)
    const refText = useRef<any>();
    const copyTextEvent = async () => {
        refText.current.select();
        await navigator.clipboard.writeText(refText.current.value);
        console.log('copiado');

    }
    return (
        <div>
            <h1 className="mb-[50px]">Dialog Page</h1>
            <AlertDialog open={openDialog}
                onOpenChange={setOpenDialog}>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data frsom our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => { console.log('cancelar') }}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => { console.log('continuar') }}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Share</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                            Anyone who has this link will be able to view this.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            <Input id="link" ref={refText} defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
                        </div>
                        <Button type="submit" onClick={copyTextEvent} size="sm" className="px-3">
                            <span className="sr-only">Copy</span>
                            <CopyIcon className="h-4 w-4" />
                        </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )

}