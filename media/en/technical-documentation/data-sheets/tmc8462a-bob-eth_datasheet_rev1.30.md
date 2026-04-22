<!-- lastmod 2023-08-03 -->
## TMC8462A-BOB-ETH Description

Document Revision V1.30 · 2022-Sept-05

## Module Top View

## Pin List

<!-- image -->

Left

Signal

## Bill of Materials

|   1 | VCC (3.3V / = VCCIO)   |   15 | PDI_SPI_SCK      |
|-----|------------------------|------|------------------|
|   2 | GND                    |   16 | PDI_SPI_MISO     |
|   3 | nRESET                 |   17 | PDI_SPI_MOSI     |
|   4 | SYNC_OUT0              |   18 | PDI_SPI_CSN      |
|   5 | RESET_OUT              |   19 | MFC_CTRL_SPI_CSN |
|   6 | LATCH_IN0              |   20 | PDI_SPI_IRQ      |
|   7 | LATCH_IN1              |   21 | PROM_INIT        |
|   8 | PDI_SOF                |   22 | MFCIO00          |
|   9 | PDI_EOF                |   23 | MFCIO01          |
|  10 | PDI_WDSTATE            |   24 | MFCIO02          |
|  11 | PDI_WDTRIGGER          |   25 | MFCIO03          |
|  12 | MFCIO09                |   26 | MFCIO04          |
|  13 | MFCIO08                |   27 | MFCIO05          |
|  14 | MFCIO07                |   28 | MFCIO06          |

Pcs.

MPN

<!-- image -->

Signal

Value

- TMC8462A-BAAdvancedEtherCATSlaveController

## Features and additional Resources

- Supply and I/O voltage 3.3V (with blue LED indicator)
- EtherCAT link activity, run, and error LEDs
- 2x RJ45 TPC connector
- Con/uniFB01guration and control via Process Data Interface (PDI) SPI, ECAT, and SII-EEPROM
- Board width 2.0", board height 1.5"
- Device emulation mode or controller mode via solder option (R5/R6)
- 2x14 pin 0.1" header rows for pins/connectors, distance of rows 1.9"
- Link to evaluation kit
- Link to additional information and IC data sheet

Description

Right

|   17 | MC0603B104K100CT      | 100nF, 10V              | 0603            | Cap, Multicomp                                 |
|------|-----------------------|-------------------------|-----------------|------------------------------------------------|
|    2 | LMK107BJ106MALTD      | 10uF, 10V               | 0603            | Cap, Taiyo Yuden                               |
|    1 | MC0603B103K500CT      | 10nF                    | 0603            | Cap, various manufacturers                     |
|    3 | LTST-C191KGKT         | V f = 2V@ I f = 20mA    | 0603            | LED, Lite-On                                   |
|    1 | LTST-C191KRKT         | V f = 2V@ I f = 20mA    | 0603            | LED, Lite-On                                   |
|    1 | LTST-C191KBKT         | V f = 2V@ I f = 20mA    | 0603            | LED, Lite-On                                   |
|    1 | 24LC64-I/SN           | 24LC64-I/SN             | SO8 (150mil)    | EEPROM, Microchip                              |
|    1 | 7499021125            | dual RJ45 conn.         | dual RJ45 conn. | Würth Elektronik                               |
|    1 | TMC8462A-BA           | TMC8462A-BA             | BGA121 (9x9)    | ECAT Slave Controller, TRINAMIC Motion Control |
|    2 | MPZ1608S101A          | 100R@100MHz             | 0603            | Ferrite bead, TDK                              |
|    1 | 742792641             | 300R@100MHz             | 0603            | Ferrite bead, Würth                            |
|    1 | 74279265              | 600R@100MHz             | 0603            | Ferrite bead, Würth                            |
|    2 | SP3304NUTG            | 3.3V, 20A               | 10-UFDFN        | TVS, Littelfuse                                |
|    1 | ASFLMB-25.000MHZ-LR-T | 25MHz, 25ppm, 1.8V-3.3V | 4-SMD, no lead  | Oscillator, Abracon LLC                        |
|    2 | MCWR06X000PTL         | 0R                      | 0603            | Res, Multicomp                                 |
|    1 | MCWR06W1R00FTL        | 1R, 1/10W, 1%           | 0603            | Res, Multicomp                                 |
|    1 | MCWR06X22R0FTLV       | 22R, 1/10W, 1%          | 0603            | Res, Multicomp                                 |
|    2 | WR06X4701FTL          | 4k7, 1/10W, 1%          | 0603            | Res, Walsin                                    |
|    2 | MC0063W060311K        | 1k, 1/10W, 1%           | 0603            | Res, Multicomp                                 |
|    7 | MCWR06X1800FTL        | 180R, 1/10W, 1%         | 0603            | Res, Multicomp                                 |

<!-- image -->

Footprint

<!-- image -->

## BOB Schematics

<!-- image -->

<!-- image -->

## BOB Schematics

<!-- image -->

## Mode Selection

- Soldering R3 / not R2 = Controller mode, EtherCAT State Machine inside microcontroller
- Soldering R2 / not R3 = PDI Emulation by the ESC, no microcontroller required

<!-- image -->

<!-- image -->

## Example/Default Slave Con/uniFB01guration

```
downloaded to the slave's EEPROM. 1 <?xml version="1.0"?> <EtherCATInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema -instance" 3 xsi:noNamespaceSchemaLocation="EtherCATInfo.xsd" Version="1.6"> <Vendor> 5 <Id>#x286</Id> <Name>Trinamic Motion Control GmbH &amp; Co. KG</Name> 7 <ImageData16x14>424dd6020000000000003600000028000000100000000e00000001 00180000000000a0020000130b0000130b00000000000000000000 9 080808525252585858585858585858585858585858585858585858 585858585858585858585858585858515151080808757575ffffff 11 ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffff757575808080ffffffcfcfcfa8a8ab 13 c7c7cdffffffffffffffffffffffffffffffffffffb8bcbc8d8e8e adadadffffff7f7f7f808080fcfcfccacacce8e8f2bebe9fd2d2c0 15 dadacfddddd8dddfd7dbc1d0cba4b7a48c94e2e6ea929293dddddd 7f7f7f808080ffffffaaaaacd6d6bab3b3729797455a5a005a5a00 17 5a5d005c5700986545b99b7dc7cec1b1b1b2f1f1f17f7f7f808080 ffffffdddde0e1e1f4757500959541d5d5c1aaaa65b1b26ad6dad5 19 81892885610ad8dce9d6d6d7ffffff7f7f7f808080ffffffffffff fffffffbfbfe595900666600b3b38aabab81686800585a00fbfdfc 21 ffffffffffffffffff7f7f7f808080ffffffffffffffffffffffff b5b58c5f5f00b9b969919140636300cacaa1ffffffffffffffffff 23 ffffff7f7f7f808080ffffffffffffffffffffffffffffff696900 b1b1598989306e6e08ffffffffffffffffffffffffffffff7f7f7f 25 808080ffffffffffffffffffffffffffffffececefa5a53b7d7d12 f0f0f4ffffffffffffffffffffffffffffff7f7f7f808080ffffff 27 ffffffffffffffffffffffffaeaebad7d7c5d0d0beb1b1bdffffff ffffffffffffffffffffffff7f7f7f808080ffffffffffffffffff 29 ffffffffffffaeaeb0d5d5d9cacaceafafb1ffffffffffffffffff ffffffffffff7f7f7f787878ffffffffffffffffffffffffffffff 31 fffffff5f5f5f5f5f5ffffffffffffffffffffffffffffffffffff 7878781d1d1dadadadb3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3 33 b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3acacac1c1c1c </ImageData16x14> 35 </Vendor> <Descriptions> 37 <Groups> <Group> 39 <Type>TrinamicEVAL</Type> <Name LcId="1033">EVAL Boards</Name> 41 <Name LcId="1031">EVAL Boards</Name> </Group> 43 </Groups> <Devices> 45 <Device Physics="YY"> <Type ProductCode="#x26483053" RevisionNo="#x00010127"> 47 TMC8462 -BOB Default </Type>
```

The following XML description shows the default slave con/uniFB01guration of the TMC8462A-BOB-ETH board, which is pre-programmed into the onboard EEPROM. It can be copied and set up as an XML /uniFB01le to be included and loaded into your EtherCAT master, converted to EEPROM binary format and downloaded to the EtherCAT Slave. With Beckhoff's TwinCAT master tool suite XML /uniFB01les can directly be used and

<!-- image -->

```
49 <Name LcId="1033">TMC8462 -BOB Default</Name> <Name LcId="1031">TMC8462 -BOB Default</Name> 51 <Info> <StateMachine> 53 <Timeout> <PreopTimeout>2000</PreopTimeout> 55 <SafeopOpTimeout>9000</SafeopOpTimeout> <BackToInitTimeout>5000</BackToInitTimeout> 57 <BackToSafeopTimeout>200</BackToSafeopTimeout> </Timeout> 59 </StateMachine> <Mailbox> 61 <Timeout> <RequestTimeout>100</RequestTimeout> 63 <ResponseTimeout>2000</ResponseTimeout> </Timeout> 65 </Mailbox> </Info> 67 <GroupType>TrinamicEVAL</GroupType> 69 <Dc> <OpMode> 71 <Name>Synchron</Name> <Desc>FreeRun/SM-Synchron</Desc> 73 <AssignActivate>#x0</AssignActivate> </OpMode> 75 <OpMode> <Name>DC</Name> 77 <Desc>DC-Synchron</Desc> <AssignActivate>#x300</AssignActivate> 79 <CycleTimeSync0 Factor="1">0</CycleTimeSync0> <ShiftTimeSync0>0</ShiftTimeSync0> 81 <CycleTimeSync1 Factor="1">0</CycleTimeSync1> <ShiftTimeSync1>0</ShiftTimeSync1> 83 </OpMode> </Dc> 85 <Eeprom> 87 <ByteSize>2048</ByteSize> <ConfigData>050F034EC40900000000</ConfigData> 89 <!--Category 1 data is required for MFC IO configuration parameter 91 loading from memory area 0x0580:0x05FF (ESC Parameter RAM) --> <Category> 93 <CatNo>1</CatNo> <Data>00000000000000000000000000000000000000000000000000000000000 95 00000000000000000000000000000000000000000000000000000000000 00000000000000000000000000000000000000000000000000000000000 97 0000000000000000000 </Data> 99 </Category> </Eeprom> 101 <ImageData16x14>424dd6020000000000003600000028000000100000000e00000001
```

<!-- image -->

<!-- image -->

<!-- image -->