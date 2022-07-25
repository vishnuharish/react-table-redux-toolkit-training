import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchAllUsers, UserInfoState } from "./slices/userInfoSlice";
import { useGetAllUsersQuery } from "./services/userInfoService";
import { Table } from "../../utilities/Table";
import { UserInfoTableColumns } from "./UserInforTableColumns";
import "./styles/userInfoStyles.scss";
export const Userinfo: React.FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const userInfo: UserInfoState = useSelector(
        (state: RootState) => state.user_info
    );
    // const {data, error, isLoading} = useGetAllUsersQuery('');
    const { loading, data, error } = userInfo;
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);
    useEffect(() => {
        console.log(loading, data, error);
    }, [loading, data, error]);
    // useEffect(() => { console.log(userInfoData, userInfoLoading, userInfoError) }, [userInfoData, userInfoError, userInfoLoading])
    const tableData = useMemo(() => data, [data]);
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
