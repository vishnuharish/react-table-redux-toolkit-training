import React, { useEffect, useMemo } from "react";
import { useGetAllUsersQuery } from "./services/userInfoService";
import { Table } from "../../utilities/Table";
import { UserInfoTableColumns } from "./UserInforTableColumns";
import "./styles/userInfoStyles.scss";
export const Userinfo: React.FC<{}> = () => {
     const {data, error, isLoading} = useGetAllUsersQuery(''); 
     useEffect(() => { console.log(data, isLoading, error) }, [data, error, isLoading])
    const tableData = useMemo(() => data ? data : [], [data]);
    const tableColumn = useMemo(() => UserInfoTableColumns, []);
    return (
        <div className="userInfo">
            <div className="header">
                <p>User Information</p>
            </div>
            <Table data={tableData} columns={tableColumn} />
        </div>
    );
};
