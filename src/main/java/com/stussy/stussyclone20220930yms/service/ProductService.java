package com.stussy.stussyclone20220930yms.service;

import com.stussy.stussyclone20220930yms.dto.CollectionListRespDto;

import java.util.List;

public interface ProductService {

    public List<CollectionListRespDto> getProductList(String category, int page)throws Exception;
}
