/*
Copyright 2023 The Vitess Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatByteForGB, fixed } from '../../../utils/Utils';
import { Swiper, SwiperSlide } from "swiper/react";

import './macrobenchmobile.css'
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const MacrobenchMobile = ({data, gitRefLeft, gitRefRight, setCurrentSlideIndexMobile, currentSlideIndexMobile, showSpan, commitHashLeft, commitHashRight}) => {

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndexMobile(swiper.realIndex);
      };
      
    return (
        <div className='macrobench__mobile'>
            <h3>{data.type}</h3>
            {showSpan && <div className='linkQuery'>Click <Link to="/macrobench/queries/compare" state={{data : data, commitHashLeft : commitHashLeft, commitHashRight : commitHashRight }}>here</Link> to see the query plans</div>}
            <div className='macrobench__component__container flex'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    onSlideChange={handleSlideChange}
                    initialSlide={currentSlideIndexMobile}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='macrobench__data flex--column'>
                            <h4>Impoved by %</h4>
                            <span>{fixed(data.diff.Diff.qps.total, 0)}</span>
                            <span>{fixed(data.diff.Diff.qps.reads, 0)}</span>
                            <span>{fixed(data.diff.Diff.qps.writes, 0)}</span>
                            <span>{fixed(data.diff.Diff.qps.other, 0)}</span>
                            <span>{fixed(data.diff.Diff.tps, 0)}</span>
                            <span>{fixed(data.diff.Diff.latency, 0)}</span>
                            <span>{fixed(data.diff.Diff.errors, 0)}</span>
                            <span>{fixed(data.diff.Diff.reconnects, 0)}</span>
                            <span>{fixed(data.diff.Diff.time, 0)}</span>
                            <span>{fixed(data.diff.Diff.threads, 0)}</span>
                            <span>{fixed(data.diff.DiffMetrics.TotalComponentsCPUTime, 0)}</span>
                            <span>{fixed(data.diff.DiffMetrics.ComponentsCPUTime.vtgate, 0)}</span>
                            <span>{fixed(data.diff.DiffMetrics.ComponentsCPUTime.vttablet, 0)}</span>
                            <span>{formatByteForGB(data.diff.DiffMetrics.TotalComponentsMemStatsAllocBytes)}</span>
                            <span>{fixed(data.diff.DiffMetrics.ComponentsMemStatsAllocBytes.vtgate, 0)}</span>
                            <span>{fixed(data.diff.DiffMetrics.ComponentsMemStatsAllocBytes.vttablet, 0)}</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='macrobench__data flex--column'>
                            <h4>{gitRefLeft ? gitRefLeft : 'Left'}</h4>
                            <span>{data.diff.Left.Result.qps.total}</span>
                            <span>{data.diff.Left.Result.qps.reads}</span>
                            <span>{data.diff.Left.Result.qps.writes}</span>
                            <span>{data.diff.Left.Result.qps.other}</span>
                            <span>{data.diff.Left.Result.tps}</span>
                            <span>{data.diff.Left.Result.latency}</span>
                            <span>{data.diff.Left.Result.errors}</span>
                            <span>{data.diff.Left.Result.reconnects}</span>
                            <span>{data.diff.Left.Result.time}</span>
                            <span>{data.diff.Left.Result.threads}</span>
                            <span>{fixed(data.diff.Left.Metrics.TotalComponentsCPUTime, 0)}</span>
                            <span>{data.diff.Left.Metrics.ComponentsCPUTime.vtgate}</span>
                            <span>{data.diff.Left.Metrics.ComponentsCPUTime.vttablet}</span>
                            <span>{formatByteForGB(data.diff.Left.Metrics.TotalComponentsMemStatsAllocBytes)}</span>
                            <span>{formatByteForGB(data.diff.Left.Metrics.ComponentsMemStatsAllocBytes.vtgate)}</span>
                            <span>{formatByteForGB(data.diff.Left.Metrics.ComponentsMemStatsAllocBytes.vttablet)}</span>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='macrobench__data flex--column' >
                            <h4>{gitRefRight ? gitRefRight : 'Right'}</h4>
                            <span>{data.diff.Right.Result.qps.total}</span>
                            <span>{data.diff.Right.Result.qps.reads}</span>
                            <span>{data.diff.Right.Result.qps.writes}</span>
                            <span>{data.diff.Right.Result.qps.other}</span>
                            <span>{data.diff.Right.Result.tps}</span>
                            <span>{data.diff.Right.Result.latency}</span>
                            <span>{data.diff.Right.Result.errors}</span>
                            <span>{data.diff.Right.Result.reconnects}</span>
                            <span>{data.diff.Right.Result.time}</span>
                            <span>{data.diff.Right.Result.threads}</span>
                            <span>{data.diff.Right.Metrics.TotalComponentsCPUTime.toFixed(0)}</span>
                            <span>{data.diff.Right.Metrics.ComponentsCPUTime.vtgate}</span>
                            <span>{data.diff.Right.Metrics.ComponentsCPUTime.vttablet}</span>
                            <span>{formatByteForGB(data.diff.Right.Metrics.TotalComponentsMemStatsAllocBytes)}</span>
                            <span>{formatByteForGB(data.diff.Right.Metrics.ComponentsMemStatsAllocBytes.vtgate)}</span>
                            <span>{formatByteForGB(data.diff.Right.Metrics.ComponentsMemStatsAllocBytes.vttablet)}</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </div>
    );
};

export default MacrobenchMobile;