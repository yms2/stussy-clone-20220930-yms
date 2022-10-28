package com.stussy.stussyclone20220930yms.service;

import com.stussy.stussyclone20220930yms.domain.Product;
import com.stussy.stussyclone20220930yms.dto.CollectionListRespDto;
import com.stussy.stussyclone20220930yms.dto.ProductRespDto;

import java.util.List;

public interface ProductService {

    public List<CollectionListRespDto> getProductList(String category, int page)throws Exception;

    public Object getProduct(int pdtId) throws Exception;

    public ProductRespDto getProduct
}
