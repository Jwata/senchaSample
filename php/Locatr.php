<?php
class Locatr {
    const REQUEST_TYPE_NEAR_BY_SEAECH = 'nearbysearch';
    private static function getRequestUrl($request_type)
    {
        // @todo: validation parameter
        $request_url = sprintf('%s/%s/%s?%s',
            BASE_API_URL, $request_type, DATA_OUTPUT_TYPE, $_SERVER['QUERY_STRING']);

        return html_entity_decode($request_url);
    }

    private static function sendCurlRequest($request_type)
    {
        $request_url = self::getRequestUrl($request_type);

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL            => $request_url,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_USERAGENT      => 'Codular Sample cURL Request',
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return $response;
    }

    public static function getNearBySearchLocations()
    {
        try {
            $data = json_decode(self::sendCurlRequest(self::REQUEST_TYPE_NEAR_BY_SEAECH));
            $item = "";

            for ($i = 0; $i < count($data->results); $i++) {
                $item = $data->results[$i];
                if (isset($item->photos)) {
                    $image_url = BASE_API_URL
                        ."photo?photoreference".$item->photos[0]->photo_reference
                        ."&sensor=false"
                        ."&maxheight=300"
                        ."&maxwidth=300"
                        ."&key=".$_GET['key'];

                    $data->results[$i]->photos[0]->url = $image_url;
                }
            }

            return json_encode($data);

        } catch (Exception $e) {
            print sprintf('Error at %s. Message: %s', __function__, $e->getMessage());
        }
    }
}
