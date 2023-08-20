import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

export default function RedirectCustomerCenter() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/customer/NOTICE");
    }, [navigate]);

    return null;
}