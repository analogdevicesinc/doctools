<!-- lastmod 2022-08-05 -->
<!-- image -->

www.maxim-ic.com

## SPECIAL FEATURES

-  1024 bits or 16Kb Electrically Programmable Read Only Memory (EPROM) communicates with the economy of one signal plus ground
-  Unique, factory-lasered and tested 64-bit registration number (8-bit family code, 36-bit serialization, 12-bit UniqueWare identifier 5E7h, 8-bit CRC-tester) assures absolute traceability because no two parts are alike
-  Built-in multidrop controller ensures compatibility with other 1-Wire products
-  EPROM partitioned into 256-bit pages for randomly accessing packetized data records
-  Each memory page can be permanently writeprotected to prevent tampering
-  Device is an 'add only' memory where additional data can be programmed into EPROM without disturbing existing data
-  Reduces control, address, data, power and programming signals to a single pin
-  Directly connects to a single port pin of a microprocessor and communicates at up to 16.3 kbits per second
-  Presence detector acknowledges when reader first applies voltage
-  Low cost TO-92 or 8-pin SOIC and 6-pin TSOC surface mount packages
-  Reads over a wide voltage range of 2.8V to 6.0V from -40°C to +85°C

## DESCRIPTION

UniqueWare Add-Only Memories are factory programmed versions of the DS2502 (1024 bit) and the DS2505 (16Kb) Add-Only Memories, respectively. They differ from the regular devices in their custom ROM family codes (see Ordering Information) and the UniqueWare Identifier 5E7h in place of the upper 12 bits of the standard serialization field. For technical details on the devices please refer to the DS2502 and DS2505 data sheets.

UniqueWare Add-Only Memories are only available preprogrammed with customer-specific and writeprotected  data.  UniqueWare  data  fills  at  least  one  but  no  more  than  the  first  two  pages  of  a  device, depending on the length of the customer-supplied data.

## DS2502/5-UNW UniqueWare Add-Only Memory

## PIN ASSIGNMENT

<!-- image -->

<!-- image -->

## PIN ASSIGNMENT

|             | TO-92   | TSOC   | SOIC   |
|-------------|---------|--------|--------|
| Pin 1       | Ground  | Ground | NC     |
| Pin 2       | Data    | Data   | NC     |
| Pin 3       | NC      | NC     | Data   |
| Pin 4       | -----   | NC     | Ground |
| Pins 5 to 8 | -----   | NC     | NC     |

<!-- image -->

<!-- image -->

## ORDERING INFORMATION

Memory Size

Family Code

Package

Ordering Part Number

1024 bits

89h

TO-92 package

DS2502U-pppp+

(4 pages)

8-pin 150 mil SOIC pkg.

DS2502SU-pppp+

6-pin TSOC package

DS2502PU-pppp+

16Kb

8Bh

TO-92 package

DS2505U-pppp+

(64 pages)

6-pin TSOC package

DS2505PU-pppp+

pppp stands for the Project ID assigned to each individual data pattern at the time of the first order.

+ Denotes a lead(Pb)-free/RoHS-compliant package.

For tape and reel append T to the ordering part number.

UniqueWare devices are only available to existing customers. New data patterns are no longer accepted. The  minimum order  quantity  (MOQ)  is  34,000  pieces  with  higher  quantities  available  in  multiples  of 17,000 pieces in either bulk form or tape and reel. The tape and reel quantities are 2000 pieces (TO-92), 4000  pieces  (TSOC)  and  2500  pieces  (SOIC).  The  total  order  quantity  (MOQ  +  additional  17,000 multiple) will cause a partial reel if the tape and reel device quantities are not an even multiple of the total order quantity. The shipment quantity can be plus or minus 10% of the order quantity. Only the quantity shipped will be billed.

## Sample UniqueWare Data Structures

SAMPLE 1: ETHERNET NODE ADDRESS Figure 1a

| (unused)     | CRC16 MSB LSB   | Company ID Value MSB LSB          | Extension ID Value MSB LSB   | Project ID MSB LSB   | Length     |
|--------------|-----------------|-----------------------------------|------------------------------|----------------------|------------|
| 19 bytes FFh | 2 bytes         | 3 bytes constant assigned by IEEE | 3 bytes serialization        | 4 bytes constant     | 1 byte 0Ah |

high address

## PHYSICAL ADDRESS AND DATA MAPPING Figure 1b

low address

| ADDRESS   | 0C   | 0B   | 0A   | 09   | 08   | 07   | 06   | 05   |   04 |   03 | 02   | 01   | 00   |
|-----------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| DATA      | xx   | xx   | ch   | cm   | cl   | hh   | mm   | ll   |   00 |   00 | pp   | pp   | 0A   |

xx xx = inverted CRC16, value depends on actual data

ch cm cl = high, medium and low byte of the IEEE assigned 'Company ID'

hh mm ll = high, medium and low byte of the 'Extension ID' or serialization

pp pp = Project ID assigned by Maxim

## SAMPLE 2: EUI-64 FireWire TM  NODE ADDRESS Figure 2a

high address

## PHYSICAL ADDRESS AND DATA MAPPING Figure 2b

low address

| (unused)     | CRC16   | Company ID Value LSB              | Extension ID Value MSB   | Project ID MSB LSB   | Length     |
|--------------|---------|-----------------------------------|--------------------------|----------------------|------------|
|              | MSB LSB | MSB                               | LSB                      |                      |            |
| 17 bytes FFh | 2 bytes | 3 bytes constant assigned by IEEE | 5 bytes serialization    | 4 bytes constant     | 1 byte 0Ch |

| ADDRESS   | 0E   | 0D   | 0C   | 0B   | 0A   | 09   | 08   | 07   | 06   | 05   |   04 |   03 | 02   | 01   | 00   |
|-----------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| DATA      | xx   | xx   | ch   | cm   | cl   | hh   | hm   | mm   | ml   | ll   |   00 |   00 | pp   | pp   | 0C   |

xx xx = inverted CRC16, value depends on actual data

ch cm cl = high, medium and low byte of the IEEE assigned 'Company ID'

hh hm mm ml ll = high, medium and low byte of the 'Extension ID' or serialization pp pp = Project ID assigned by Maxim

The examples shown here use the Default Data Structure. This format is also known as UDP (universal data packet) and is commonly used in 1-Wire APIs. Therefore, if using one of those APIs one can call a high level function to read and verify the inverted CRC16. The UDP is defined in Application Note 114, 1-Wire File Structure , and the APIs can be found in the 1-Wire Software Development Kits .

FireWire TM is a trademark of Apple Computer, Inc.

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                                   | PAGES CHANGED   |
|-----------------|-------------------------------------------------------------------------------|-----------------|
| 12/09           | Changed the Ordering Information to lead free.                                | 2               |
| 12/09           | Removed the DS2506U.                                                          | 1, 2            |
| 12/09           | Removed instructions on how to set up a UniqueWare project (no new projects). | 2               |
| 12/09           | Added MOQ, tape and reel size, and shipment quantity information.             | 2               |
| 12/09           | Emphasized that the 16-bit CRC is inverted.                                   | 2, 3            |
| 12/09           | Included an explanation of 'Default Data Structure.'                          | 3               |
| 12/09           | Changed notation of hexadecimal numbers from H to h.                          | 1, 2, 3         |