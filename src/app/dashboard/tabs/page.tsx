
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab1,Tab2 } from './ui'

export default function Page() {

    return (
        <div>
            <div className="flex justify-center">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="user">User</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                       <Tab1/>
                    </TabsContent>
                    <TabsContent value="password">                    
                    <Tab2/>
                    </TabsContent>
                    <TabsContent value="user">                    
                    <Tab2/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )

}