<!-- lastmod 2023-08-03 -->
## TMC8462A Datasheet

The TMC8462A is a complete EtherCAT ® Slave Controller optimized for real time. It comprises all blocks required for an EtherCAT slave including two 100-MBit PHYs, a dual switch regulator power supply and 24V capable high voltage I/Os for industrial environments. Timer, watchdog, PWM and SPI/IIC master units allow for enhanced capabilities either in device emulation mode or in combination with an external CPU.

Document Revision V1.10 • 2022-Aug-29

<!-- image -->

<!-- image -->

## Applications

- Industrial Automation
- Motor Drives
- Communication Modules
- Industry 4.0
- Robotics

## Features

- 2xIntegrated 100-MBit Ethernet PHY
- StandardcompliantEtherCAT ® Slave Controller
- SPI Process Data Interface (PDI)
- 4.75V...35V Supply Voltage range
- Auxiliary IO Block with 24 con/uniFB01gurable Multi-Function I/Os
- 2x Integrated 3.3V and 5V-24V buck regulators
- -40°C to +85°C Temperature Range
- 8HighVoltageI/Os(upto35V,100mA)
- 9x9mm 121pin BGA package
- Building Automation · Real-time control
- Connected Motion

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2022 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com

<!-- image -->

<!-- image -->

- Sensors &amp; Encoders

<!-- image -->

## Contents

| 2 Order Codes 3                                                                             | 2 Order Codes 3                                                                                                                                           | 2 Order Codes 3                                                                                                                                           | 6     |
|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Principles of Operation / Key Concepts 3.1 General Device Architecture . . . . . .          | Principles of Operation / Key Concepts 3.1 General Device Architecture . . . . . .                                                                        | Principles of Operation / Key Concepts 3.1 General Device Architecture . . . . . .                                                                        | 7     |
|                                                                                             | . .                                                                                                                                                       | . .                                                                                                                                                       | 7     |
| 3.2                                                                                         | EtherCAT Slave Controller . .                                                                                                                             | EtherCAT Slave Controller . .                                                                                                                             | 8     |
| 3.3                                                                                         | . . . . Multi-Function and Control IO Block . . . . .                                                                                                     | . . . . Multi-Function and Control IO Block . . . . .                                                                                                     | 8     |
| 3.4                                                                                         | Analog and High Voltage Block . . . . . . . . . . . . . . . . .                                                                                           | Analog and High Voltage Block . . . . . . . . . . . . . . . . .                                                                                           | 9     |
| 3.5                                                                                         | . . . . Interfaces . . . . . . . . . . . . . . .                                                                                                          | . . . . Interfaces . . . . . . . . . . . . . . .                                                                                                          | 10    |
| 3.6                                                                                         | Software- and Tool-Support . . .                                                                                                                          | Software- and Tool-Support . . .                                                                                                                          | 10    |
| 4 Device Pin De/uniFB01nitions                                                              | 4 Device Pin De/uniFB01nitions                                                                                                                            | 4 Device Pin De/uniFB01nitions                                                                                                                            | 15    |
| 4.1 4.2                                                                                     | Pinout and Pin Coordinates of TMC8462A-BA                                                                                                                 | Pinout and Pin Coordinates of TMC8462A-BA                                                                                                                 | 15    |
| . . . . . . . . . . Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . | . . . . . . . . . . Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | . . . . . . . . . . Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | 15    |
| 5 Device Usage and Handling Process Data Interface . .                                      | 5 Device Usage and Handling Process Data Interface . .                                                                                                    | 5 Device Usage and Handling Process Data Interface . .                                                                                                    | 23    |
| 5.1                                                                                         |                                                                                                                                                           |                                                                                                                                                           | 23    |
|                                                                                             | . . . . . . . . . . . . . . . . . .                                                                                                                       | . . . . . . . . . . . . . . . . . .                                                                                                                       | 24    |
|                                                                                             | 5.1.1                                                                                                                                                     | SPI protocol description . . . .                                                                                                                          |       |
|                                                                                             | 5.1.2                                                                                                                                                     | Timing example                                                                                                                                            | 26 27 |
| 5.2                                                                                         | . . . . . . MFC IO Control Interface . . . . . . . . . . . . . .                                                                                          | . . . . . . MFC IO Control Interface . . . . . . . . . . . . . .                                                                                          | 28    |
|                                                                                             | 5.2.1 SPI Protocol description .                                                                                                                          | 5.2.1 SPI Protocol description .                                                                                                                          | 27    |
|                                                                                             | . 5.2.2 Timing example . . . . . . . . . . . 5.2.3 Sharing Bus Lines with the PDI SPI                                                                     | . 5.2.2 Timing example . . . . . . . . . . . 5.2.3 Sharing Bus Lines with the PDI SPI                                                                     | 28    |
| 5.3                                                                                         | . . Ethernet Physical Layer Connection . . . . . .                                                                                                        | . . Ethernet Physical Layer Connection . . . . . .                                                                                                        | 30    |
| 5.4                                                                                         | . . . .                                                                                                                                                   | . . . .                                                                                                                                                   | 31    |
|                                                                                             | . . . . . External Circuitry and Applications Examples . . . . . . . . 5.4.1 Device Reset . . . . . . . . . . . . . . . . . . . . . . 5.4.2 . . . . . . . | . . . . . External Circuitry and Applications Examples . . . . . . . . 5.4.1 Device Reset . . . . . . . . . . . . . . . . . . . . . . 5.4.2 . . . . . . . | 31    |
|                                                                                             | Supply Filtering for PLL Supply . . . .                                                                                                                   | Supply Filtering for PLL Supply . . . .                                                                                                                   | 31    |
|                                                                                             | . .                                                                                                                                                       | . .                                                                                                                                                       |       |
|                                                                                             | 5.4.3 PHY Power Regulator Filtering . . 5.4.4 External Circuit for Fixed Switching                                                                        | 5.4.3 PHY Power Regulator Filtering . . 5.4.4 External Circuit for Fixed Switching                                                                        | 32 33 |
|                                                                                             | . . . . . . . . . Regulator 0 . . . 5.4.5                                                                                                                 | . . . . . . . . . Regulator 0 . . . 5.4.5                                                                                                                 |       |
|                                                                                             | . . External Circuit for Adjustable Switching Regulator 1 . . Minimum External Supply Circuit for Single 3.3V Supply                                      | . . External Circuit for Adjustable Switching Regulator 1 . . Minimum External Supply Circuit for Single 3.3V Supply                                      | 34    |
|                                                                                             | . 5.4.6 . Minimum External Supply Circuit for Single 5V Supply . .                                                                                        | . 5.4.6 . Minimum External Supply Circuit for Single 5V Supply . .                                                                                        | 35    |
|                                                                                             |                                                                                                                                                           |                                                                                                                                                           | 36    |
|                                                                                             | 5.4.7 . 5.4.8 Minimum External Supply Circuit for Single Supply >5V . . 5.4.9 Chain Using Both Buck Converters .                                          | 5.4.7 . 5.4.8 Minimum External Supply Circuit for Single Supply >5V . . 5.4.9 Chain Using Both Buck Converters .                                          | 37 38 |
|                                                                                             | Typical Power Supply 5.4.10 Status LED Circuit . . .                                                                                                      | Typical Power Supply 5.4.10 Status LED Circuit . . .                                                                                                      | 38    |
|                                                                                             | . SII EEPROM Circuit . . . Considerations on PHY                                                                                                          | . SII EEPROM Circuit . . . Considerations on PHY                                                                                                          | 38    |
|                                                                                             | 5.4.11 . . . . . . . . . . . 5.4.12 to PHY Connection                                                                                                     | 5.4.11 . . . . . . . . . . . 5.4.12 to PHY Connection                                                                                                     | 39    |
| 6 EtherCAT 6.1                                                                              | Slave Controller Description General EtherCAT Information . . . . . . . . . . . . . . . . . . . .                                                         | Slave Controller Description General EtherCAT Information . . . . . . . . . . . . . . . . . . . .                                                         | 40 40 |
| 6.2                                                                                         | Overview of Available Chip Features . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | Overview of Available Chip Features . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | 41    |
| 6.3                                                                                         | EtherCAT Register Overview . . . . . . EtherCAT                                                                                                           | EtherCAT Register Overview . . . . . . EtherCAT                                                                                                           | 43    |
| 6.4                                                                                         | Register Set . . . . . . . . . . . . . 6.4.1 . . . . . . . . . . . . .                                                                                    | Register Set . . . . . . . . . . . . . 6.4.1 . . . . . . . . . . . . .                                                                                    | 49 49 |
|                                                                                             | . . 6.4.2 . . .                                                                                                                                           | . . 6.4.2 . . .                                                                                                                                           | 53    |
|                                                                                             | ESC Information . . Station Address . . . 6.4.3 .                                                                                                         | . .                                                                                                                                                       | 54    |
|                                                                                             | Write Protection . Data Link Layer . . .                                                                                                                  | . . .                                                                                                                                                     | 56    |
|                                                                                             | 6.4.4                                                                                                                                                     | Application Layer . . . .                                                                                                                                 |       |
|                                                                                             | 6.4.5 6.4.6                                                                                                                                               | PDI . . . . . . . . . . .                                                                                                                                 | 61 64 |
|                                                                                             |                                                                                                                                                           | . . . . .                                                                                                                                                 | 68    |
|                                                                                             | 6.4.7                                                                                                                                                     | Interrupts                                                                                                                                                | 71    |
|                                                                                             | 6.4.8 6.4.9                                                                                                                                               | . . . Error Counters . . . . . Watchdogs . . . . . . . .                                                                                                  | 74    |

<!-- image -->

1

Product Features

5

7

6.4.10

SII EEPROM Interface .

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

77

|                                                                                                          | 6.4.11                                                                                                                                | ESC Parameter RAM . . . . . . . . . .                                                                                                 | . 81       |
|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|------------|
|                                                                                                          |                                                                                                                                       | . MII                                                                                                                                 |            |
|                                                                                                          | 6.4.12                                                                                                                                | . . . Management Interface . . . . . . . . . . . . . . . . . . .                                                                      | . 82 86    |
|                                                                                                          | 6.4.13                                                                                                                                | FMMUs . . . . . . . . . . . . .                                                                                                       | . 89       |
|                                                                                                          | 6.4.14                                                                                                                                | SyncManagers . . . . .                                                                                                                | . 93       |
|                                                                                                          | 6.4.15                                                                                                                                | . . . . . . . . . . . . Distributed Clocks Receive Times . .                                                                          | .          |
|                                                                                                          | 6.4.16                                                                                                                                | . . . . Distributed Clocks Time Loop Control Unit . Distributed Clocks Cyclic Unit Control . . .                                      | . 94       |
|                                                                                                          | 6.4.17                                                                                                                                | . Distributed Clocks SYNC Out Unit . . . .                                                                                            | . 98       |
|                                                                                                          | 6.4.18 6.4.19                                                                                                                         | . .                                                                                                                                   | 99         |
|                                                                                                          |                                                                                                                                       | Distributed Clocks LATCH In Unit                                                                                                      | . .103 107 |
|                                                                                                          | 6.4.20 6.4.21                                                                                                                         | . . . . . . . Distributed Clocks SyncManager Event Times ESC Speci/uniFB01c . . . . . . . . . . . . . . . . . . .                     | . .108     |
|                                                                                                          | 6.4.22                                                                                                                                | Process Data                                                                                                                          | .109       |
|                                                                                                          |                                                                                                                                       | RAM . . . . . . . . . . . . . . .                                                                                                     |            |
| MFC IO Block Description                                                                                 | MFC IO Block Description                                                                                                              | MFC IO Block Description                                                                                                              | 110        |
| 7.1                                                                                                      | General Information . . . . . MFC . .                                                                                                 | . . . . . . . . . . . . . .                                                                                                           | .110       |
| 7.2 7.3                                                                                                  | IO Register Overview                                                                                                                  | . . . . . . . . . . . . . .                                                                                                           | .112       |
|                                                                                                          | MFC IO Register Set . . .                                                                                                             | . . . . . . .                                                                                                                         | .115 .115  |
|                                                                                                          | 7.3.1                                                                                                                                 | . . . . . . . . . . Incremental Encoder Interface . . . . . . . . SPI Master Interface . . . . . . .                                  |            |
|                                                                                                          | 7.3.2                                                                                                                                 | . . . . . . . I2C                                                                                                                     | .118 .120  |
|                                                                                                          | 7.3.3                                                                                                                                 | Master Interface                                                                                                                      |            |
|                                                                                                          | 7.3.4                                                                                                                                 | . . . . . . . . . . . . . . Step and Direction Signal Generator . . . . . PWMUnit . . . . . . . . . . . . . . . . . . . .             | .122 .128  |
|                                                                                                          | 7.3.5                                                                                                                                 |                                                                                                                                       | .132       |
|                                                                                                          | 7.3.6 7.3.7                                                                                                                           | General Purpose I/Os . . . . . . . . . . . . . . . . . . . . .                                                                        | .133       |
|                                                                                                          |                                                                                                                                       | DAC Unit . . . . . . . . . . . . . IRQ                                                                                                |            |
|                                                                                                          | 7.3.8                                                                                                                                 | Control Block . . . . . . . . . . . . . . . . . . . . .                                                                               | 134 .136   |
|                                                                                                          | 7.3.9                                                                                                                                 | Watchdog . . . . .                                                                                                                    | .          |
|                                                                                                          | 7.3.10                                                                                                                                | . . . . . . . . . . High Voltage Status and General Control . . Application Layer Control . . . . .                                   | .139 .143  |
|                                                                                                          | 7.3.11                                                                                                                                | . . . . .                                                                                                                             | 144        |
| 7.4                                                                                                      | . SII EEPROM MFC IO Block Parameter Map . SII EEPROM MFC IO Crossbar Mapping . . .                                                    | . . . . .                                                                                                                             | .          |
| 7.5                                                                                                      | SII EEPROM MFC IO High Voltage IO (HVIO)                                                                                              | SII EEPROM MFC IO High Voltage IO (HVIO)                                                                                              | .148 .152  |
| 7.6 7.7                                                                                                  | Con/uniFB01guration SII EEPROM MFC IO Switching Regulator Con/uniFB01guration . . .                                                   | Con/uniFB01guration SII EEPROM MFC IO Switching Regulator Con/uniFB01guration . . .                                                   | .153       |
| 7.8                                                                                                      | SII EEPROM MFC IO Memory Block Mapping . . . . . . .                                                                                  | SII EEPROM MFC IO Memory Block Mapping . . . . . . .                                                                                  | .155       |
|                                                                                                          | . . 7.8.1 Sync Manager Con/uniFB01guration and Memory Blocks . . SII EEPROM MFC IO Register Con/uniFB01guration . . . . . . . . . . . | . . 7.8.1 Sync Manager Con/uniFB01guration and Memory Blocks . . SII EEPROM MFC IO Register Con/uniFB01guration . . . . . . . . . . . | .156 . 157 |
| 7.9 7.10                                                                                                 | MFC IO ESI/XML Con/uniFB01guration Block . . . . . .                                                                                  | MFC IO ESI/XML Con/uniFB01guration Block . . . . . .                                                                                  |            |
| . . . . . .                                                                                              | . . . . . .                                                                                                                           | . . .                                                                                                                                 | .159 .160  |
| 7.11 MFC IO Incremental Encoder Block . . . 7.12 MFC IO SPI Master Block . . . . . . . . .               | 7.11 MFC IO Incremental Encoder Block . . . 7.12 MFC IO SPI Master Block . . . . . . . . .                                            | . . .                                                                                                                                 | .162       |
| 7.12.1 SPI Examples . . . . . . . .                                                                      | 7.12.1 SPI Examples . . . . . . . .                                                                                                   | 7.12.1 SPI Examples . . . . . . . .                                                                                                   | .163       |
| 7.13 MFC IO I2C Master Block . . . . . .                                                                 | 7.13 MFC IO I2C Master Block . . . . . .                                                                                              | . .                                                                                                                                   | . 167      |
| . . . . . . . . . 7.13.1 I2C Example . . . . . . . . . . . . . . . . . . . .                             | . . . . . . . . . 7.13.1 I2C Example . . . . . . . . . . . . . . . . . . . .                                                          | . .                                                                                                                                   | .169       |
| 7.14 MFC IO Step and Direction Block . . . . . . . 7.15 MFC IO PWMBlock . . . . . . . . . . . . . . .    | 7.14 MFC IO Step and Direction Block . . . . . . . 7.15 MFC IO PWMBlock . . . . . . . . . . . . . . .                                 | . .                                                                                                                                   | . 171      |
|                                                                                                          |                                                                                                                                       |                                                                                                                                       | . 174 .180 |
| . . . . . . . 7.16 MFC IO DAC Block . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | . . . . . . . 7.16 MFC IO DAC Block . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                   | . . . . . . . 7.16 MFC IO DAC Block . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                   |            |
| 7.17 MFC IO General Purpose IO Block . . . . 7.18 MFC IO IRQ Block . . . . . . . . . . . . . .           | 7.17 MFC IO General Purpose IO Block . . . . 7.18 MFC IO IRQ Block . . . . . . . . . . . . . .                                        | . . . . . . .                                                                                                                         | . 181 .182 |
| 7.19 MFC IO Watchdog Block . . . . .                                                                     | 7.19 MFC IO Watchdog Block . . . . .                                                                                                  | . . . . . .                                                                                                                           | .183       |
|                                                                                                          |                                                                                                                                       | . . . . .                                                                                                                             | . 187      |
| . . . . . . 7.20 MFC IO Emergency Switch Input . . . . . . 7.21 MFC IO Analog and High Voltage Block . . | . . . . . . 7.20 MFC IO Emergency Switch Input . . . . . . 7.21 MFC IO Analog and High Voltage Block . .                              | . . . .                                                                                                                               |            |
| .                                                                                                        | .                                                                                                                                     | . . .                                                                                                                                 | .188 .188  |
| . . 7.21.1 Multi Voltage High Current I/O Lines                                                          | . . 7.21.1 Multi Voltage High Current I/O Lines                                                                                       | . . 7.21.1 Multi Voltage High Current I/O Lines                                                                                       |            |
| . 7.21.2 Switching Regulators . . . . . . . . . . . 7.21.3 Analog Block Status Register . . . . . .      | . 7.21.2 Switching Regulators . . . . . . . . . . . 7.21.3 Analog Block Status Register . . . . . .                                   | . .                                                                                                                                   | .189       |
| . .                                                                                                      | . .                                                                                                                                   | . .                                                                                                                                   | .190       |

<!-- image -->

8

Electrical Ratings

192

| 8.1 Absolute     | 8.1 Absolute                     | 8.1 Absolute                                                                                 |           |
|------------------|----------------------------------|----------------------------------------------------------------------------------------------|-----------|
|                  | 8.2                              | Maximum Ratings . . Operational Ratings . . . .                                              | .192 .193 |
|                  | 8.3                              |                                                                                              |           |
|                  | DC 8.3.1 High                    | . . . . . . . . . Characteristics and Timing Characteristics Voltage I/O Block . . . . . . . | .193 .193 |
|                  |                                  | Switching Regulators .                                                                       | 194       |
|                  | 8.3.2 8.3.3                      | Digital IOs . . . . . . .                                                                    | . .195    |
| 9                | Manufacturing Data 9.1 Package   | Manufacturing Data 9.1 Package                                                               | 196       |
|                  |                                  | Dimensions . . . . . . Marking . . . . . . . .                                               | .196 .198 |
|                  | 9.2                              | . . . . . .                                                                                  |           |
| 10 Abbreviations | 10 Abbreviations                 | 10 Abbreviations                                                                             | 199       |
| 11 Figures Index | 11 Figures Index                 | 11 Figures Index                                                                             | 201       |
| 12 Tables Index  | 12 Tables Index                  | 12 Tables Index                                                                              | 202       |
|                  | 13 Revision History . . .        | 13 Revision History . . .                                                                    | 205       |
|                  | 13.1 IC Revision . 13.2 Document | . . . . . .                                                                                  | .205 .205 |
|                  | . . Revision .                   | . . . . . .                                                                                  |           |

<!-- image -->

## 1 Product Features

## Advantages:

TMC8462AisanadvancedEtherCATSlaveController device used for EtherCAT communication. It provides the interface for data exchange between EtherCAT master and the slave's local application controller. In addition, TMC8462A provides complex IO functions paired with high voltage features and integrated 100MBit Ethernet PHYs.

- Fully standard compliant and proven EtherCAT engine
- License-free &amp; royalty-free
- Highly integrated EtherCAT Slave Controller solution
- High Voltage &amp; robust

## Major Features:

- Saves board space &amp; reduces BOM
- EtherCAT Slave Controller with 2 Ethernet ports, 8 FMMU &amp; 8 Sync Managers, Distributed clocks with 64 bit, 16KByte of Process Data Memory, external I2C EEPROM, SPI Process Data Interface (PDI), optional device emulation
- High voltage IO block with 8 short circuit protected push-/pull or open drain high voltage I/Os for up to 24V and 100mA drive current
- Multi-Function Control and IO block with 24 con/uniFB01gurable IO ports for real-time IO functions (GPIOs, PWM, Step/Direction, I2C, SPI, DAC, incremental encoder)
- Two integrated 500mA step-down switching voltage regulators with one being /uniFB01xed at 3.3V and one being programmable between 5V and 24V
- Two integrated 100-MBit Ethernet PHYs to directly connect to twisted pair copper or back-to-back directly to another PHY
- Internal 1.8V linear regulator for core voltage generation
- Simple con/uniFB01guration of EtherCAT Slave Controller and Multi-Function Control and IO block via EEPROM
- -40°C to +85°C Temperature Range
- Single supply architecture depending on application: 3.3V only or 5V to 35V (5V, 12V, or 24V typical)
- Package: 9mm x 9mm BGA package with 121 pins and 0.75mm pitch

<!-- image -->

## 2 Order Codes

Order Code

Description

## Trademark and Patents

| TMC8462A-BA      | TMC8462A Advanced EtherCAT ® Slave Controller in 121 pin BGA package with 0.75mm pitch                                                              | 9mmx9mm     |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| TMC8462A-EVAL    | Evaluation Board for TMC8462A-BA, compatible with the modular Landungsbruecke system, RJ45 twisted pair copper interface                            | 79mm x 85mm |
| TMC8462A-BOB-ETH | Breakout Board (BOB) for TMC8462A-BA, with 0.1" header rows, reference clock source, SII-EEPROM, and RJ45 twisted pair copper transceiver interface | 2.0" x 1.5" |

Table 1: TMC8462A order codes

<!-- image -->

EtherCAT ® is a registered trademark and patented technology, licensed by Beckhoff Automation GmbH, Germany.

<!-- image -->

Size

## 3 Principles of Operation / Key Concepts

## 3.1 General Device Architecture

TMC8462A is a highly integrated ASIC providing the interface between the Ethernet-based EtherCAT realtime /uniFB01eld bus and the local application. Its extended digital and high voltage feature set provides additional functions to the EtherCAT slave.

Figure 1 shows the general device architecture and major connections of TMC8462A. The four function blocks EtherCAT Slave Controller, Multi-Function Control and IO, Analog and High Voltage, and Ethernet PHYs are introduced in the following sub-sections.

For operation, a stable 25MHz clock source, an IIC EEPROM, and power supply for IO and high voltage operation are required (if the high voltage features are used). An application controller, which also runs the EtherCAT slave stack, connects to the SPI interfaces. The application and onboard peripherals can be controlled by the application controller or the Multi-Function Control and IO block.

<!-- image -->

Figure 1: General device architecture

<!-- image -->

## 3.2 EtherCAT Slave Controller

The ESC part of TMC8462A provides the following EtherCAT-related features. More information is available in Section 6.

TMC8462A contains a standard-conform EtherCAT Slave Controller (ESC) providing real-time EtherCAT MAC layer functionality to EtherCAT slaves. It connects via MII interface to standard Ethernet PHYs and provides a digital control interface to a local application controller while also providing the option for standalone operation.

- Two internal 100-MBit Ethernet PHYs
- Eight Sync Managers (SM)
- Eight Fieldbus Memory Management Units (FMMU)
- 16 KByte of Process Data RAM (PDRAM)
- I2C interface for external EEPROM for ESC con/uniFB01guration
- 64B bit Distributed Clocks support
- SPI Process Data Interface (PDI) with 30Mbit/s
- Device Emulation Mode
- Proven EtherCAT State Machine (ESM)

## 3.3 Multi-Function and Control IO Block

The MFC IO block combines various functional sub blocks that are helpful in an embedded design to reduce complexity, to simplify bill of materials (BOM), and to provide hardware acceleration to compute intensive or time critical tasks. More information is available in Section 7.

In addition to the EtherCAT functionality, the TMC8462A comes with a dedicated function block providing a con/uniFB01gurable set of complex real-time IO functionality for smart (embedded) EtherCAT slave systems. This IO functionality is called Multi-Function Control and IO block (MFC IO). Its special focus is on motor and motion control while it is not limited to this application area.

Con/uniFB01gurable IO Ports The whole MFC IO block provides in total 24 IO ports that can be con/uniFB01gured and assigned to any of the available functional units inside the MFC IO block. If not used, each IO port can be tristated.

General Purpose IOs Up to sixteen (16) general purpose IOs are available. Each IO can be con/uniFB01gured either as input or as output. For the outputs, a safe state can be con/uniFB01gured which is used in case of emergency event.

Incremental Encoder Interface Con/uniFB01gurable incremental encoder interface with 32 bit position registers, single-ended or differential inputs, con/uniFB01gurable counting constant for different resolutions, con/uniFB01gurable polarity and N-signal behavior.

Step/Direction Generator Block The step and direction unit provides upt to 3 independent channels. Various con/uniFB01guration options and modes allow for example for continuous or one-shot mode, reading of the internal total step counters, pre-loading the next step frequency to be used at a certain counter value. The step and direction outputs signals can be single-ended or differential.

<!-- image -->

PWMBlock The integrated PWM block provides up to 4 PWM channels. PWM frequency and duty cycle as well as polarities and dead times are con/uniFB01gurable. The outputs can be con/uniFB01gured for a safe state in case of emergency.

Generic SPI Master Interface The TMC8462A provides a generic SPI master interface to connect to onor off-board SPI slave peripherals like ADCs, sensors, or motor drivers. The SPI master interface is fully con/uniFB01gurable and offers 4 slave select lines.

Generic I2C Master Interface A generic I2C master interface is also available in TMC8462A to connect to I2C slaves. The I2C bus speed is con/uniFB01gurable.

Digital DAC A simple digital 16 bit DAC channel is available which requires an external RC circuit for operation.

Safety Functions The following safety functions are available with the TMC8462A

- A general emergency switch input can be activated. For critical outputs, a safe state can be con/uniFB01gured which is used when the emergency switch triggers.
- Con/uniFB01gurable watchdog functionality for the MFC IO block to monitor internal and external signals as well as EtherCAT activity. This block is fully con/uniFB01gurable.
- A common IRQ signal is available at the MFC IO block which can be mapped to various events of the MFC IO block. The IRQ events can be processed by a local application controller.

TMC8462A has an integrated powerful high voltage sub block that provides analog functions and high voltage support to your EtherCAT slave. The integrated high voltage capabilities allow for BOM reduction and save board space. More information is available in Section 7.21.

## 3.4 Analog and High Voltage Block

High Voltage Ports 8 of the 24 con/uniFB01gurable IO ports of the MFC IO block are high voltage IO ports. For pure digital systems operating at 3.3V or 5V these ports can simply be used as standard IO ports. When using a higher supply voltage at the VIOx inputs the high voltage ports can be used at up to 35V (5V, 12V, 24V typical). The 8 high voltage ports are grouped into 3 groups with 2, 3, and 3 ports. Each group can be used a different supply voltage level using VIO1, VIO2, and VIO3 inputs.

Each high voltage port has a short circuit protected push-/pull or open drain output stage with 100mA drive current (ca. 200 mA short time) and can be combined with any signal of the MFC IO block functions. The outputs' slope can be controlled. An optional input /uniFB01lter is selectable as well as pull downs or pull ups with 100 µA . The high voltage ports have an over-temperature shutdown.

WARNING

When driving inductive loads a freewheeling diode must be provided to the high voltage I/O pins to prevent from latch-up.

Switching Regulators Two switching regulators (buck regulators) are integrated into TMC8462A - SW0 and SW1. Both are capable of driving up to 500mA.

SW0generates a /uniFB01xed 3.3V rail for internal and external logic supply. SW1 is programmable between 3.3V and VS (up to 24V) and can be used for peripheral supply, e.g, to generate a 5V encoder supply. Each switching regulator comes with a separate over-temperature shutdown.

<!-- image -->

Single Supply Operation TMC8462A is designed to work with a single external power supply rail. All required supply voltages are generated internally. The required external supply rail depends on the application scenario (between 3.3V and 24V).

Field Bus Interface TMC8462A contains 2 integrated 100-MBit Ethernet PHYs and directly connects to the /uniFB01eld bus using an external transformer circuit. In addition, the PHY interfaces of two TMC8462A devices can also be connected directly to allow back-to-back connection with only low part count and a small circuit. This is useful when extending the EtherCAT bus on the board or to a another slave close by.

## 3.5 Interfaces

ESC Process Data Interface The ESC part can be accessed via the so-called Process Data Interface (PDI). TMC8462A comes with an SPI PDI. Besides the standard SPI bus lines additional control signals belong to the SPI PDI, which are further described in Section 5.1..

MFC IO Control Interface The MFC IO block of TMC8462A can be accessed from EtherCAT master side or from the local application controller. For connection to the local application controller, a second SPI interface - the MFC IO SPI - is provided. The protocol used nearly identical to the SPI PDI interface. Additional information on the MFC IO SPI is given in Section 5.2.

EEPROMInterface TheEEPROMinterfaceisintendedtobeapoint-to-pointinterfacebetweenTMC8462A and EEPROM with TMC8462A being the master. If other I2C masters are required to access the I2C bus, TMC8462A must be held in reset state, for example for in-circuit-programming of the EEPROM. During operation, the application controller must tristate its I2C interface. Depending on the EEPROM size the addressing mode must be properly set using the PROM\_SIZE con/uniFB01guration pin.

Con/uniFB01guration Inputs Hard-wired con/uniFB01guration pins are available at the TMC8462A, which are used to con/uniFB01gure various options related to the hardware con/uniFB01guration and application scenario and which will not change. These pins are PROM\_SIZE, PDI\_SHARED\_SPI\_BUS, and DEVICE\_EMULATION. More information on these con/uniFB01guration pins and signals is given in Section 4.2 and Section 5.

TRINAMIC's EtherCAT Slave Controller family comes with extensive hardware and software tool support to get started quickly.

## 3.6 Software- and Tool-Support

Evaluation Board An evaluation board is available for the TMC8462A with standard RJ45 connectors and transformers for interfacing twisted pair copper (TPC) media.

<!-- image -->

Figure 2: TMC8462A Evaluation Board

<!-- image -->

The complete board design /uniFB01les are available for download and can be used as reference. All information is available for download on the speci/uniFB01c product page on TRINAMIC's website at http://www.trinamic.com/products/integrated-circuits/evalboards.

Breakout Board (BOB) Besides the Evaluation board another smaller breakout board is available. It allows for easy integration into own systems or connection to a prototyping platform. The breakout board provides the bus interface along with the ESC and requires an appropriate supply and controller connection. The BOB comes with standard RJ45 connectors to connect to TPC using the TMC8462 ESC with integrated Ethernet PHYs. TMC8462 is functionally equal to the TMC8461. The difference is in using external PHYs vs. integrated PHYs. The complete board design /uniFB01les are available for download and can be used as reference. All information is available for download from the evaluation board section on TRINAMIC's website at https://www.trinamic.com/support/eval-kits/.

<!-- image -->

Figure 3: TMC8462 breakout board for RJ45 and TPC

<!-- image -->

TRINAMIC Technology Access Package In addition, a comprehensive source code and software package - TRINAMIC Technology Access Package (TTAP) - is available for download to get started quickly with own code. The TTAP is available at https://www.trinamic.com/support/software/access-package/ .

TMCL-IDE TheTMCL-IDEisTRINAMIC'sprimarytool(forWindowsPCs)tocontrolTRINAMICmodulesand evaluation boards. Besides, it provides feature like remote /uniFB01rmware updates, module monitoring options, and speci/uniFB01c Wizard support. The TMCL-IDE can be used along with TRINAMIC's modular evaluation board system.

<!-- image -->

Figure 4: TMCL-IDE

<!-- image -->

Thelatest version and additional information is available for download from TRINAMIC's website at http://www.trinami tools/tmcl-ide.

EtherCAT Slave Con/uniFB01guration Con/uniFB01guration of the EtherCAT Slave Controller is done during boot time with con/uniFB01guration information read from the SII EEPROM after reset or power cycling. This information mustbe(pre)programmedintotheSIIEEPROM.ThiscanbedoneviatheEtherCATmasterusingaso-called EtherCAT Slave Information (ESI) /uniFB01le in standardized XML format. The SII EEPROM can also be (re)written using the local application controller.

ESI Con/uniFB01guration Wizard The TMCL-IDE contains a wizard to assist users with the con/uniFB01guration of the TMC8462A various MFC IO functions. The wizard shows available and allowed options and provides XML code snippets for the ESI /uniFB01le for the SII EEPROM as well as generic C-Code blocks. These can be used as starting point for own /uniFB01rmware development for the application controller.

<!-- image -->

Figure 5: Con/uniFB01guration wizard example - MFC IO block con/uniFB01guration

<!-- image -->

<!-- image -->

Figure 6: Con/uniFB01guration wizard example - SII EEPROM content and C-code output

<!-- image -->

## 4 Device Pin De/uniFB01nitions

## 4.1 Pinout and Pin Coordinates of TMC8462A-BA

1

## 4.2 Signal Descriptions

Name

Pin

| General Signals   | General Signals   | General Signals   | General Signals                                                                                                                                                                                                   |
|-------------------|-------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NRESET            | K4                | I/O               | Low active system reset. NRESET is an I/O pin. Connected to VCCIO via a 10K resistor and to GNDviaa10nFcapacitorifnootherresetsource for proper power-on reset is used. For more in- formation see Section 5.4.1. |
| REF_CLK25_IN      | L3                | I                 | 25MHz Reference Clock Input, connect to clock source with <25ppm or better.                                                                                                                                       |
| CLK16_OUT         | H7                | O                 | 16.6MHz auxiliary clock output. Not available during reset.                                                                                                                                                       |
| EN_CLK16_OUT      | E9                | I                 | Enable signal for CLK16_OUT: 0 = off, 1 = on                                                                                                                                                                      |

<!-- image -->

2

3

4

5

6

7

8

9

Figure 7: TMC8462A-BA Pinout top view

<!-- image -->

| A  B  C  D  E  F  G  H  J  K  L   |
|-----------------------------------|

Type (I,O,PU,PD)

Function

10

11

Name

Pin

Type (I,O,PU,PD)

Function

| RESET_OUT   | J4   | O   | This high-active reset output is activated via EtherCAT register 0x0040 ), thereforeRESET_OUT has to trigger the NRESET input, which clears RE- SET_OUT. This connection incl. changing the po- larity has to be made externally .   |
|-------------|------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

<!-- image -->

Name

Pin

| EEPROM IOs   | EEPROM IOs   | EEPROM IOs   | EEPROM IOs                                                                                                                                                                                                                          |
|--------------|--------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PROM_INIT    | J5           | O            | Signal indicating that EEPROM has been loaded, 0 = not ready, 1 = EEPROM loaded                                                                                                                                                     |
| PROM_CLK     | H4           | O            | External I2C EEPROM clock signal, use 1K pull up resistor to 3.3V                                                                                                                                                                   |
| PROM_DATA    | H5           | I/O          | External I2C EEPROMdatasignal, use 1k pullup resistor to 3V3                                                                                                                                                                        |
| PROM_SIZE    | G9           | I            | Selects between two different EEPROM sizes since the communication protocol for EEPROM access changes if a size > 16kBit is used (an ad- ditional address byte is required then). 0 = up to 16kBit EEPROM, 1 = 32 kBit-4Mbit EEPROM |

DC Synchronization IOs

Type (I,O,PU,PD)

Function

| 0,        | 0,   | 0,   | 0,                                                                    |
|-----------|------|------|-----------------------------------------------------------------------|
| SYNC_OUT0 | D7   | O    | Distributed Clocks synchronization output typically connect to MCU    |
| SYNC_OUT1 | D6   | O    | Distributed Clocks synchronization output 1, typically connect to MCU |
| LATCH_IN0 | C7   | I    | Latch input 0 for Distributed Clocks, connect to GND if not used.     |
| LATCH_IN1 | C6   | I    | Latch input 1 for Distributed Clocks, connect to GND if not used.     |

LEDs

| LED_RUN   | B3   | O   | Run Status LED, connect to green LED (Anode) 0 = LED off, 1 = LED on                    |
|-----------|------|-----|-----------------------------------------------------------------------------------------|
| LED_ERR   | C3   | O   | Error Status LED, connect to red LED (Anode) 0 = LED off, 1 = LED on                    |
| LINK_ACT0 | D3   | O   | Link In Port Status and Activity, connect to green LED (Anode) 0 = LED off, 1 = LED on  |
| LINK_ACT1 | E3   | O   | Link Out Port Status and Activity, connect to green LED (Anode) 0 = LED off, 1 = LED on |

<!-- image -->

Name

Pin

| Process Data Interface IOs to/from MCU   | Process Data Interface IOs to/from MCU   | Process Data Interface IOs to/from MCU   | Process Data Interface IOs to/from MCU                                                                                                                                                                                                           |
|------------------------------------------|------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PDI_SOF                                  | H3                                       | O                                        | Ethernet Start-of-Frame if 1                                                                                                                                                                                                                     |
| PDI_EOF                                  | G3                                       | O                                        | Ethernet End-of-Frame if 1                                                                                                                                                                                                                       |
| PDI_SPI_CSN                              | L4                                       | I                                        | Chip select signal of the process data interface                                                                                                                                                                                                 |
| PDI_SPI_SCK                              | K3                                       | I                                        | Serial clock signal of the process data interface                                                                                                                                                                                                |
| PDI_SPI_MOSI                             | L5                                       | I                                        | Serial data out signal of the process data inter- face                                                                                                                                                                                           |
| PDI_SPI_MISO                             | K5                                       | O                                        | Serial data in signal of the process data interface                                                                                                                                                                                              |
| PDI_SPI_IRQ                              | J3                                       | O                                        | Interrupt signal for primary process data inter- face, connect to MCU                                                                                                                                                                            |
| PDI_WDSTATE                              | G4                                       | O                                        | EtherCAT Watchdog state, 0: Expired, 1: Not ex- pired                                                                                                                                                                                            |
| PDI_WDTRIGGER                            | F4                                       | O                                        | EtherCAT Watchdog trigger if 1                                                                                                                                                                                                                   |
| PDI_EMULATION                            | J7                                       | I                                        | Selects between PDI interface (SPI) or stan- dalone operation with state machine emulation inside ESC. Has weak internal pull down. 0 = default, PDI interface active, 1 = standalone op- eration, state machine emulation in Slave Con- troller |

MFC IO Control Interface IOs

Type (I,O,PU,PD)

Function

| MFC_CTRL_SPI_CSN   | D4   | I   | Chip select signal of the MFCIOcontrol interface                                                                                                                                                         |
|--------------------|------|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MFC_CTRL_SPI_SCK   | E4   | I   | Serial clock signal of the MFCIOcontrolinterface                                                                                                                                                         |
| MFC_CTRL_SPI_MOSI  | C4   | I   | Serial data out signal of the MFCIOcontrol inter- face                                                                                                                                                   |
| MFC_CTRL_SPI_MISO  | E7   | O   | Serial data in signal of the MFC IO control inter- face                                                                                                                                                  |
| MFC_IRQ            | E6   | O   | MFCIO block IRQ for con/uniFB01gurable events, con- nect to MCU, high active                                                                                                                             |
| MFC_NES            | C5   | I   | low active (not) Emergency Stop/Switch/Halt (to bring PWM or other outputs into a safe state), the event must be cleared actively, has weak in- ternal pulldown, mustbedrivenhighfornormal operation     |
| PDI_SHARED_BUS     | F9   | I   | Selects between separate SPI buses (MISO, MOSI, SCK) or one SPI bus with two CS lines for the PDI and MFCCTRL SPI interface: 0 = two sep- arate SPI buses, 1=onesharedSPIbususingthe PDI_SPI_x bus lines |

<!-- image -->

Name

| MFC IOs   | MFC IOs   | MFC IOs   | MFC IOs                     |
|-----------|-----------|-----------|-----------------------------|
| MFCIO00   | J8        | I/O       | MFCIO block low voltage I/O |
| MFCIO01   | J9        | I/O       | MFCIO block low voltage I/O |
| MFCIO02   | J10       | I/O       | MFCIO block low voltage I/O |
| MFCIO03   | J11       | I/O       | MFCIO block low voltage I/O |
| MFCIO04   | H8        | I/O       | MFCIO block low voltage I/O |
| MFCIO05   | H9        | I/O       | MFCIO block low voltage I/O |
| MFCIO06   | H10       | I/O       | MFCIO block low voltage I/O |
| MFCIO07   | H11       | I/O       | MFCIO block low voltage I/O |
| MFCIO08   | D8        | I/O       | MFCIO block low voltage I/O |
| MFCIO09   | D9        | I/O       | MFCIO block low voltage I/O |
| MFCIO10   | D10       | I/O       | MFCIO block low voltage I/O |
| MFCIO11   | D11       | I/O       | MFCIO block low voltage I/O |
| MFCIO12   | C8        | I/O       | MFCIO block low voltage I/O |
| MFCIO13   | C9        | I/O       | MFCIO block low voltage I/O |
| MFCIO14   | C10       | I/O       | MFCIO block low voltage I/O |
| MFCIO15   | C11       | I/O       | MFCIO block low voltage I/O |

MFC High Voltage IOs

Pin

Type (I,O,PU,PD)

Function

| MFC_HV0 (MFCIO16)   | A4   | I/O   | MFCIO block high voltage I/O   |
|---------------------|------|-------|--------------------------------|
| MFC_HV1 (MFCIO17)   | A5   | I/O   | MFCIO block high voltage I/O   |
| MFC_HV2 (MFCIO18)   | A6   | I/O   | MFCIO block high voltage I/O   |
| MFC_HV3 (MFCIO19)   | A7   | I/O   | MFCIO block high voltage I/O   |
| MFC_HV4 (MFCIO20)   | A8   | I/O   | MFCIO block high voltage I/O   |
| MFC_HV5 (MFCIO21)   | A9   | I/O   | MFCIO block high voltage I/O   |
| MFC_HV6 (MFCIO22)   | A10  | I/O   | MFCIO block high voltage I/O   |
| MFC_HV7 (MFCIO23)   | A11  | I/O   | MFCIO block high voltage I/O   |

<!-- image -->

Name

Pin

| MFC High Voltage IO Supplies   | MFC High Voltage IO Supplies   | MFC High Voltage IO Supplies   | MFC High Voltage IO Supplies           |
|--------------------------------|--------------------------------|--------------------------------|----------------------------------------|
| VIO1                           | B5                             | I                              | MFCHVIO block 1 supply voltage         |
| VIO2                           | B7                             | I                              | MFCHVIO block 2 supply voltage         |
| VIO3                           | B9                             | I                              | MFCHVIO block 3 supply voltage         |
| GNDIO1                         | B6                             | I                              | MFCHVIO block 1 ground, connect to GND |
| GNDIO2                         | B8                             | I                              | MFCHVIO block 2 ground, connect to GND |
| GNDIO3                         | B10                            | I                              | MFCHVIO block 3 ground, connect to GND |

Device Supply and Ground

Type (I,O,PU,PD)

Function

| VS           | B11                                    | I   | Supply voltage, use a 100nF /uniFB01lter capacitor                                     |
|--------------|----------------------------------------|-----|----------------------------------------------------------------------------------------|
| VCCIO        | E10, F10, G10, F11                     | I   | I/O supply voltage, use a 100nF /uniFB01lter capacitor per pin                         |
| VCC_CORE     | F6, G6, F7, G7                         | I   | Core supply voltage, connect to VDD1V8_OUT, use a 100nF /uniFB01lter capacitor per pin |
| PLLCLK_VCCIO | K6                                     | I   | PLL supply voltage, connect to VCCIO through a /uniFB01lter (R/L/C)                    |
| GND          | C1, F1, J1, A3, B4, F5, G5, E8, F8, G8 | I   | Supply Ground                                                                          |
| PLLCLK_GND   | J6                                     | I   | PLL supply ground, connect to GND                                                      |

Voltage Regulator IOs

| VDD1V8_OUT   | G11   | O   | Output of internal 1.8V regulator, use a 100nF /uniFB01lter capacitor            |
|--------------|-------|-----|----------------------------------------------------------------------------------|
| VDD5_OUT     | E11   | O   | Output of internal 5V regulator, use a 100nF /uniFB01l- ter capacitor if VS ≥ 5V |

<!-- image -->

Name

Pin

Type (I,O,PU,PD)

| Switching Regulator 0 IOs   | Switching Regulator 0 IOs   | Switching Regulator 0 IOs   | Switching Regulator 0 IOs                                                                                               |
|-----------------------------|-----------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------|
| VS0                         | L7                          | I                           | Switching regulator 0 supply voltage, Switching regulator 0 provides a /uniFB01xed 3.3V output. Leave open if not used. |
| GND0                        | L9                          | I                           | Switching regulator 0 ground, connect to GND                                                                            |
| SW0                         | L8                          | O                           | Switching regulator 0 output, /uniFB01xed 3.3V, Leave open if not used.                                                 |
| SW_DIODE                    | K7                          | I                           | Switching regulator 0 internal diode, connect to SW0 only if VS0 is at or below 5V                                      |
| GND_DIODE                   | K8                          | I                           | Switching regulator 0 internal diode ground, connect to GND                                                             |

Switching Regulator 1 IOs

Function

| VS1     | L11   | I   | Switching regulator 1 supply voltage, Switching regulator 1 provides an adjustable output volt- age. Leave open if not used.   |
|---------|-------|-----|--------------------------------------------------------------------------------------------------------------------------------|
| GND1    | K9    | I   | Switching regulator 1 ground, connect to GND                                                                                   |
| SW1     | L10   | O   | Switching regulator 1 output, adjustable, Leave open if not used.                                                              |
| VOUT    | K10   | I   | Switching regulator 1 inductor ringing suppres- sion feedback                                                                  |
| VOUT_FB | K11   | I   | Switching regulator 1 feedback voltage, 1.2V typ- ically, Leave open if not used.                                              |

Bus Interface 0 IOs (EtherCAT IN Port)

| TN0     | D1   | O       | Negative pin of differential transmit output pair                            |
|---------|------|---------|------------------------------------------------------------------------------|
| TP0     | E1   | O       | Positive pin of differential transmit output pair                            |
| RN0     | A1   | I       | Negative pin of differential receive output pair                             |
| RP0     | B1   | I       | Positive pin of differential receive output pair                             |
| REGOUT0 | A2   | O       | Regulator power output, use a 10uF and 0.1uF for /uniFB01ltering power noise |
| MCLK    | F2   | O       | PHY management clock, leave open if not needed                               |
| MDIO    | F3   | I/O, PU | PHY management data, use 4K7 pull up resis- tor to VCCIO (3.3V)              |

<!-- image -->

Name

| Bus Interface 1 IOs (EtherCAT OUT Port)   | Bus Interface 1 IOs (EtherCAT OUT Port)   | Bus Interface 1 IOs (EtherCAT OUT Port)   | Bus Interface 1 IOs (EtherCAT OUT Port)                                      |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------|
| TN1                                       | K1                                        | IO                                        | Negative pin of differential transmit output pair                            |
| TP1                                       | L1                                        | IO                                        | Positive pin of differential transmit output pair                            |
| RN1                                       | G1                                        | IO                                        | Negative pin of differential receive output pair                             |
| RP1                                       | H1                                        | IO                                        | Positive pin of differential receive output pair                             |
| REGOUT1                                   | L2                                        | O                                         | Regulator power output, use a 10uF and 0.1uF for /uniFB01ltering power noise |

Test Pins only

Pin

Type (I,O,PU,PD)

Function

| TST_MODE      | E5   | I     | Test mode enable, connect to GND                      |
|---------------|------|-------|-------------------------------------------------------|
| TST_ANA       | D5   | O     | Analog test output, leave open                        |
| TSTCLK_SELECT | H6   | I     | Test input, always connect to GNDfor normal operation |
| RXCLK0        | D2   | IO    | Clock test pin, leave open                            |
| RXCLK1        | G2   | IO    | Clock test pin, leave open                            |
| TXCLK0        | E2   | IO    | Clock test pin, leave open                            |
| TXCLK1        | H2   | IO    | Clock test pin, leave open                            |
| RXDV0         | B2   | I, PD | Test pin, leave open for normal operation             |
| RXDV1         | K2   | I, PD | Test pin, leave open for normal operation             |
| TXER0         | C2   | I, PD | Test pin, leave open for normal operation             |
| TXER1         | J2   | I, PD | Test pin, leave open for normal operation             |
| CLKO_100      | L6   | O     | 100MHz clock output                                   |

Table 2: Pin and Signal description for TMC8462A-BA

<!-- image -->

## 5 Device Usage and Handling

The Process Data Interface (PDI) is an SPI interface with a clock frequency of up to 30 MHz. The ESC registers and the process data RAM can be accessed from an external microcontroller using this interface. The interface can be con/uniFB01gured via the EEPROM, however it is recommended to use the default con/uniFB01guration (SPI mode 3 with low active chip select). For further details, see the ESC SPI slave con/uniFB01guration registers in Section 6.

## 5.1 Process Data Interface

Additionally, some signals are available that can be evaluated by the application controller.

Figure 8: PDI control signals

<!-- image -->

Description

| PDI_SPI_CSN   | SPI chip select for the TMC8462A PDI                                                                                                                                                                              | SSx                                                           |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| PDI_SPI_SCK   | SPI master clock                                                                                                                                                                                                  | SCK                                                           |
| PDI_SPI_MOSI  | Master out slave in data                                                                                                                                                                                          | MOSI                                                          |
| PDI_SPI_MISO  | Master in slave out data                                                                                                                                                                                          | MISO                                                          |
| PDI_SPI_IRQ   | Con/uniFB01gurable IRQ from PDI                                                                                                                                                                                   | General purpose Input                                         |
| PDI_EMULATION | 0: default mode for complex slaves, state machine changes processed in microcontroller /uniFB01rmware (SSC); 1: device emulation mode for, e.g., simple slaves, state machine changes directly handled in the ESC | General purpose Output or connected to either ground or 3.3V. |
| PDI_SOF       | Indicates start of an Ethernet/EtherCAT frame (MII_RXDV = '1')                                                                                                                                                    | General purpose Input                                         |

Typical pin on a MCU

<!-- image -->

TMC8462A pin

TMC8462A pin

## 5.1.1 SPI protocol description

Description

Table 3: PDI signal description

| PDI_EOF       | Indicates end of an Ethernet/EtherCAT frame   | General purpose Input   |
|---------------|-----------------------------------------------|-------------------------|
| PDI_WDSTATE   | 0: Watchdog expired; 1: Watchdog not expired  | General purpose Input   |
| PDI_WDTRIGGER | Watchdog triggered if '1'                     | General purpose Input   |

Each SPI datagram contains a 2- or 3-byte address/command part and a data part. For addresses below 0x2000 , the 2-byte addressing mode can be used, the 3 byte addressing mode can be used for all addresses.

C2

C1

C0

Command

|   0 |   0 |   0 | NOP (no operation, no following data bytes)   |
|-----|-----|-----|-----------------------------------------------|
|   0 |   0 |   1 | Reserved                                      |
|   0 |   1 |   0 | Read                                          |
|   0 |   1 |   1 | Read with wait state byte                     |
|   1 |   0 |   0 | Write                                         |
|   1 |   0 |   1 | Reserved                                      |
|   1 |   1 |   0 | Address extension, signaling 3 byte mode      |
|   1 |   1 |   1 | Reserved                                      |

Table 4: PDI SPI commands

<!-- image -->

Figure 9: PDI SPI 2 byte addressing

<!-- image -->

Typical pin on a MCU

Figure 10: PDI SPI 3 byte addressing

<!-- image -->

Unless highest performance is required, using only the 3-byte addressing mode and the read with wait state command is recommended since it reduces the need for special cases in the software. During the address/command bytes, the ESC replies with the contents of the event request registers ( 0x0220 , 0x0221 and in 3 byte addressing mode 0x0222 ).

This command can be used for checking the event request registers and resetting the PDI watchdog without a read or write access.

## Command 0 - NOP

Example datagram:

0x00 0x00

Example reply (AL Control event bit is set):

0x01 0x00

## Command 2 - READ

When using this command, a pause of 240ns or more must be included between the address/command bytes and the data bytes for the ESC to fetch the requested data.

With the read command, an arbitrary amount of data can be read from the device. The /uniFB01rst byte read is the data from the address given by the address/command bytes. With every read byte, the address is incremented. During the data transfer, the SPI master sends 0x00 except for the last byte where a 0xFF is sent.

Example datagram (Read from address 0x0120 and 0x0121 ):

0x09 0x02 0x00 0xFF

Example reply (Operational State requested):

0x01 0x00 0x08 0x00

## Command 3 - READ WITH WAIT STATE BYTE

This command is similar to the Read command with an added dummy byte between the address/command part and the data part of the datagram. This allows enough time to fetch the data in any case.

Example datagram (Read starting at address 0x3400 ): 0xA0 0x06 0x2C 0xFF 0x00 0x00 0x00 0xFF Example reply ( 0xXX is unde/uniFB01ned data): 0x00 0x00 0x00 0xXX 0x44 0x41 0x54 0x41

## Command 4 - WRITE

The write command allows writing of an arbitrary number of bytes to writable ESC registers or the process data RAM. It requires no wait state byte or delay after the address/command bytes. After every transmitted byte, the address is incremented.

Example datagram (Write starting at address 0x4200 ): Example reply ( is unde/uniFB01ned data):

0x10 0x06 0x50 0x4C 0x48

0xXX Address now contains

0x00 0x00 0x00 0xXX 0xXX

0x4200 0x4C , Address 0x4201 contains 0x48

<!-- image -->

## Command 6 - ADDRESS EXTENSION

The address extension command is mainly used for the 3-byte addressing mode as shown in Figure 10. For SPI masters that can only process datagrams with an even number of bytes, it might be necessary to pad the datagram to an even number of bytes. This can be achieved by duplicating the third byte of the 3-byte address/command part and using the address extension command in all but the last duplicate. For example, a SPI master that is only capable of transmitting a multiple of 4 bytes cannot use the example datagram for a write access above since it contains 5 bytes. With three added padding bytes, the master has to transmit two 4-byte groups.

Example datagram (Write starting at address 0x4200 ): 0x10 0x06 0x58 0x58 0x58 0x50 0x4C 0x48 Example reply ( 0xXX is unde/uniFB01ned data): 0x00 0x00 0x00 0xXX 0xXX 0xXX 0xXX 0xXX

## 5.1.2 Timing example

This example shows a generic read access with wait state and 2 byte addressing. All con/uniFB01gurable options are shown. The delays between the transferred bytes are just to show the byte boundaries and are not required.

<!-- image -->

Figure 11: SPI timing example

<!-- image -->

## 5.2 MFC IO Control Interface

The MFC Control SPI is a SPI mode 3 slave with low active chip select. The SPI clock frequency can be up to 30MHz. The following diagram shows all signals related to the MFC CTRL SPI interface.

The MFC IO block of the TMC8462A comes with a dedicated SPI slave interface to allow direct access from a local application controller. It is called MFC CTRL SPI interface. This interface to the MFC IO block's functions is always available, even if the EtherCAT state machine is currently not in operational state (OP). Protocol structure and timing are identical to the PDI SPI.

Figure 12: MFC control signals

<!-- image -->

TMC8462A pin

## 5.2.1 SPI Protocol description

Access using the 3 byte addressing mode is possible, and can be used when 2 byte mode is not implemented for the PDI SPI but since the highest bits of the address are always 0, accessing the MFC Control SPI via 2 byte mode is su/uniFB03cient.

Description

Table 5: MFC CTRL SPI signal description

| MFC_CTRL_SPI_CSN   | SPI chip select for the TMC8462A PDI                                                                                                                                                                                                         | SSx                                                           |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| MFC_CTRL_SPI_SCK   | SPI master clock                                                                                                                                                                                                                             | SCK                                                           |
| MFC_CTRL_SPI_MOSI  | Master out slave in data                                                                                                                                                                                                                     | MOSI                                                          |
| MFC_CTRL_SPI_MISO  | Master in slave out data                                                                                                                                                                                                                     | MISO                                                          |
| MFC_IRQ            | Con/uniFB01gurable IRQ from MFC IO block                                                                                                                                                                                                     | General purpose Input                                         |
| PDI_SHARED_BUS     | 0: separate SPI buses for PDI and MFC CTRL; 1: shared/common SPI bus for PDI and MFC CTRL with 2 CSN signals using the PDI SPI bus. The SPI bus signals MFC_CTRL_SPI_SCK, MFC_CTRL_SPI_MISO, MFC_CTRL_SPI_MOSI can be left open in this case | General purpose Output or connected to either ground or 3.3V. |

The protocol of the MFC CTRL SPI is the same as the PDI SPI interface (see section 5.1.1) The addresses for register access are calculated using the register number and the byte number in each register. To calculate the address, the register number is shifted left by 4 bits and the byte number is added as the 4 lowest bits.

<!-- image -->

Typical pin on a MCU

Figure 13: MFC CTRL SPI 2 byte addressing

<!-- image -->

Figure 14: MFC CTRL SPI 3 byte addressing

<!-- image -->

This example shows a generic MFC register read access with wait state. The delays between the transferred bytes are just to show the byte boundaries and are not required.

## 5.2.2 Timing example

Figure 15: MFC SPI timing example

<!-- image -->

## 5.2.3 Sharing Bus Lines with the PDI SPI

To reduce the number of signals on the PCB or if the local application controller has only one SPI interface, the MFC CTRL SPI bus can share the SPI bus signals of the PDI SPI, requiring only separate chip select signals. In this case, both interfaces are internally switched to the PDI SPI interface pins. The original MFC CTRL SPI signals (MOSI, MISO, and SCK) remain unconnected in this case. Only the MFC\_CTRL\_SPI\_CSN pin/signal must be used if the MFCIO block is accessed.

<!-- image -->

To share the SPI bus lines, con/uniFB01guration pin PDI\_SHARED\_BUS must be pulled high as shown in the /uniFB01gure below.

<!-- image -->

Figure 16: SPI bus sharing

<!-- image -->

## 5.3 Ethernet Physical Layer Connection

TMC8462Acomeswith two integrated 100-MBit Ethernet PHYs eliminating the need for external PHY components. The physical media interface can connect to (shielded) twisted pair copper buses ((S)TPC). Port signals with index 0 represent the EtherCAT IN port. Port signals with index 1 represent the EtherCAT OUT port.

Figure 17: Physical bus interface pins

<!-- image -->

Description

Table 6: Physical bus interface pin description

| TNx     | Negative pin of differential transmit output pair                                                                   |
|---------|---------------------------------------------------------------------------------------------------------------------|
| TPx     | Positive pin of differential transmit output pair                                                                   |
| RNx     | Negative pin of differential receive output pair                                                                    |
| RPx     | Positive pin of differential receive output pair                                                                    |
| REGOUTx | This is a regulator power output. A 10uF and 0.1uF should be connected to this pin for /uniFB01ltering power noise. |
| MCLK    | PHY con/uniFB01guration clock output                                                                                |
| MDIO    | PHY con/uniFB01guration data in-/output                                                                             |

TMC8462A pin

<!-- image -->

## 5.4 External Circuitry and Applications Examples

The NRESET signal should at least be connected to VCCIO via a 10K resistor and to GND via a 10nF capacitor if no other controlled reset source for proper power-on behavior and reset is used.

VCCIO (3.3V)

TMC8462A

Figure 18: Minimum external circuit for power-on reset

<!-- image -->

## 5.4.2 Supply Filtering for PLL Supply

VCCIO (3.3V)

The internal PLL is supplied with the same 3.3V as used for VCCIO. An R/L/C /uniFB01lter structure as shown in the circuit diagram is used. PLLCLK\_GND is connected to common ground. Pin TSTCLK\_SELECT must be connected to common ground.

TMC8462A

<!-- image -->

Figure 19: PLL supply /uniFB01lter

<!-- image -->

## 5.4.1 Device Reset

## 5.4.3 PHY Power Regulator Filtering

The internal PHY circuits require external /uniFB01lter capacitors.

<!-- image -->

TMC8462A

Figure 20: PHY power regulator /uniFB01ltering

<!-- image -->

## 5.4.4 External Circuit for Fixed Switching Regulator 0

More information on the switching regulators is given in Section 7.21.

Switching regulator 0 is an internal buck switching regulator and generates a /uniFB01xed 3.3V supply with approximately 500mA. This 3.3V supply shall be used to power VCCIO and PLLCLK\_VCCIO. This regulator comes with an integrated Schottky diode which minimizes part count, when an external 5V supply is available. This 3.3V can also be used to power other on-board devices, e.g., EEPROM or LEDs. The 3.3V rail is available at switching regulator 0 output SW0.

TMC8462A

<!-- image -->

VS=5V

Figure 21: External circuit for switching regulator 0 with VS0 = 5V

TMC8462A

<!-- image -->

VS&gt;5V

Figure 22: External circuit for switching regulator 0 with VS0 &gt; 5V

<!-- image -->

## 5.4.5 External Circuit for Adjustable Switching Regulator 1

More information on the switching regulators is given in Section 7.21.

Switching regulator 1 is an internal buck switching regulator and generates an adjustable supply rail with approximately 500mA. The voltage at SW1 can be adjusted using a resistor network in the switching regulator's feedback path at VOUT\_FB. VOUT\_FB should be at 1.2V using a resistor divider. SW1 can be used to power the high voltage IOs using VIO1, VIO2, VIO3 as well as switching regulator 0 input VS0 (which generates a /uniFB01xed 3.3V rail). SW1 can also be used to power other peripheral devices, e.g., Hall signals of a BLDC motor or external encoders.

TMC8462A

<!-- image -->

VS

Figure 23: External circuit for adjustable buck regulator

<!-- image -->

## 5.4.6 Minimum External Supply Circuit for Single 3.3V Supply

The high voltage IOs are also not used in this example. Therefore, the three high voltage IO supply ports VIO1, VIO2, and VIO3 are not connected.

The diagram shows the minimum external circuit when using a single 3.3V supply only. Both internal switching regulators are not used in this example. Therefore, both supply ports VS0 and VS1 are not connected.

VS=3.3V

<!-- image -->

VS=3.3V

Figure 24: Minimum external supply circuit for single 3.3V supply

<!-- image -->

## 5.4.7 Minimum External Supply Circuit for Single 5V Supply

VS=5V

The diagram shows the minimum external circuit when using a single 5V supply only. Switching regulator 0 is used to generate the 3.3V for VCCIO and PLLCLK\_VCCIO. Switching regulator 1 is not used in this example. Therefore, supply port VS1 is not connected. The high voltage IOs are also not used in this example. Therefore, the three high voltage IO supply ports VIO1, VIO2, and VIO3 are not connected.

<!-- image -->

Figure 25: Minimum external supply circuit for single 5V supply

<!-- image -->

## 5.4.8 Minimum External Supply Circuit for Single Supply &gt;5V

VS&gt;5V

To connect TMC8462A to a single supply greater than 5V the circuit is very similar to Figure 25. The main difference is that an additional external diode (MSS1P6) is required at output SW0. The pin SW\_DIODE is open.

<!-- image -->

Figure 26: Minimum external supply circuit for single supply &gt;5V

<!-- image -->

## 5.4.9 Typical Power Supply Chain Using Both Buck Converters

VS

Figure 27: Typical power supply chain using both buck converters

<!-- image -->

## 5.4.10 Status LED Circuit

For a 2V forward voltage at 2mA, a value of 680 Ohm is a reasonable value. The LED colors are de/uniFB01ned by ETG.1300 (available on www.ethercat.org ).

The TMC8462A has 4 status LED outputs. All outputs are supplied from VCCIO (3.3V), and drive a LED with current limiting resistor to GND. The use of low current LED is recommended to keep supply current low and to stay within the current limit of 10mA per pin. The appropriate resistor value must be chosen for the selected LED's forward voltage.

TMC8462A LED outputs

Figure 28: Status LED circuit

<!-- image -->

An I 2 C EEPROM is required for operation with the SII interface. Its size can be up to 4MBit. While the access protocol of the I 2 C EEPROMs is standardized, the addressing procedure changes from one address

<!-- image -->

## 5.4.11 SII EEPROM Circuit

byte up to 16kBit to two address bytes from 32kBit. Up to 16kBit the PROM\_SIZE pin must be tied to GND, above that, it must be tied to VCCIO (3.3V).

3.3V

<!-- image -->

3.3V

Figure 29: SII EEPROM circuit (shown for EEPROMs &gt;32kBit)

## 5.4.12 Considerations on PHY to PHY Connection

In applications with multiple EtherCAT slave controllers in one enclosed device or even on the same PCB, it is not always necessary to connect the slave controllers via magnetics, RJ-45 connectors (or similar) and a patch cable. Instead a direct backbone connection or traces on the PCB can be used to directly link the PHYs, however coupling capacitors must be used in the connection. This option reduces the cost as well as the required space in the setup.

Note

This connection method should be used only over short distances with no or few connectors in between. It is not recommended for longer distances, especially using a wired connection.

TMC8462A #1 OUT port

TMC8462A #2 IN port

<!-- image -->

Figure 30: Direct PHY to PHY connection

<!-- image -->

3.3V

## 6 EtherCAT Slave Controller Description

TMC8462A contains a standard-conform EtherCAT Slave Controller (ESC) providing real-time EtherCAT MAC layer functionality to EtherCAT slave devices. The ESC part of TMC8462A provides the following EtherCAT-related features:

## 6.1 General EtherCAT Information

- 16 KByte of Process Data RAM (PDRAM): The PDRAM is a dual ported RAM, which allows exchange of data between the EtherCAT master and the local application.
- Eight Fieldbus Memory Management Units (FMMU): FMMUs are used for mapping of logical addresses to physical addresses. The EtherCAT master uses logical addressing for data than spans multiple slaves. An FMMU can map such a logical address range to a continuous local physical address range.
- Eight Sync Managers (SM): Sync Managers are used to control and secure the data exchange via the PDRAM in terms of data consistency, data security, and synchronized read/write operations on the data objects. Two modes -buffered mode and mailbox mode - are available.
- 64 bit Distributed Clock support (DC): DC is the base of the real-time capability of EtherCAT. Their underlying algorithms compute delay times between the master and the slaves and between slaves and update a common time stamp in all slaves. This way, synchronized time stamps (LATCH0/1) and synchronized trigger signals (SYNC0/1) are available in every slave and to the master.
- SPI Process Data Interface (PDI): The PDI is the interface between the local application controller and the ESC. Application-speci/uniFB01c process data and EtherCAT control and status information for the EtherCAT State Machine (ESM) is exchanged via this interface.
- IIC interface for external SII EEPROM for ESC con/uniFB01guration: After reset and at power up, the ESC requires reading basic (and advanced) con/uniFB01guration data from an external SII EEPROM to properly con/uniFB01gure interfaces, operation modes, and and feature availability. The SII EEPROM may be read and written by the master or the local application controller as well.
- Device Emulation Mode: This mode is a special mode of operation where no ESM in the application controller is required. The slave's operation states are simply directly set by the master without control of an ESM. This is bene/uniFB01cial for small and simple slaves, for example simple IO devices.
- EtherCAT Technology Group (ETG) (http://www.ethercat.org/)

To manufacture own slaves devices, a registration with the EtherCAT Technology Group (ETG) is required. More information and resources on the EtherCAT technology and the EtherCAT standard are available here:

- EtherCAT is standardized by the IEC (http://www.iec.ch/) and /uniFB01led as IEC-Standard 61158.

<!-- image -->

## 6.2 Overview of Available Chip Features

The following table shows EtherCAT chip features available in TRINAMIC's EtherCAT slave controller solutions.

| Chip Feature / Description                                                       | Domain         |   TMC8460 |   TMC8461 |   TMC8462 |   TMC8670 |
|----------------------------------------------------------------------------------|----------------|-----------|-----------|-----------|-----------|
| Extended DL control register 0x0102:0x0103 enabled                               | Register       |         1 |         1 |         1 |         1 |
| AL Status code register 0x0134:0x0135 enabled                                    | Register       |         1 |         1 |         1 |         1 |
| ECAT interrupt mask 0x0200:0x0201 enabled                                        | Register       |         1 |         1 |         1 |         1 |
| Con/uniFB01gured station alias 0x0012:0x0013 enabled                             | Register       |         1 |         1 |         1 |         1 |
| General purpose inputs 0x0F18:0x0F1F enabled                                     | Register       |         0 |         0 |         0 |         0 |
| General purpose outputs 0x0F10:0x0F17 enabled                                    | Register       |         0 |         0 |         0 |         0 |
| AL event mask 0x0204:0x0207 enabled                                              | Register       |         1 |         1 |         1 |         1 |
| Physical RD/WR offset 0x0108:0x0109 enabled                                      | Register       |         0 |         1 |         1 |         0 |
| Bridge port PDI ( 0x07 ) enabled                                                 | Register       |         0 |         0 |         0 |         0 |
| Writable Watchdog divider 0x0400:0x0401 and Watchdog PDI 0x0410:0x0411 enabled   | Watchdog       |         1 |         1 |         1 |         0 |
| Watchdog counters 0x0442:0x0444 enabled                                          | Watchdog       |         1 |         1 |         1 |         1 |
| ECAT write protection 0x0020:0x0031 enabled                                      | Ext. Function  |         0 |         1 |         1 |         0 |
| Reset registers 0x0040:0x0041 enabled                                            | Ext. Function  |         1 |         1 |         1 |         1 |
| FPGA update at 0x0E00 enabled                                                    | Ext. Function  |         0 |         0 |         0 |         0 |
| DC Sync event times enabled                                                      | Ext. Function  |         1 |         1 |         1 |         0 |
| ECAT processing unit and PDI error counters/PDI error code 0x030C:0x030E enabled | Ext. Function  |         1 |         1 |         1 |         0 |
| User RAM disabled                                                                | Ext. Functions |         1 |         0 |         0 |         0 |
| 1: POR Values, 0: VENDOR ID                                                      | Ext. Functions |         0 |         0 |         0 |         0 |
| EEPROM control by PDI enabled                                                    | PHY Layer      |         0 |         0 |         0 |         0 |
| Lost link counters 0x0310:0x0313 enabled                                         | PHY layer      |         1 |         1 |         1 |         0 |
| MII management interface 0x0510 enabled                                          | PHY layer      |         1 |         1 |         1 |         1 |
| Enhanced link detection for MII enabled                                          | PHY layer      |         1 |         1 |         1 |         1 |
| Link detection and con/uniFB01guration for MII enabled                           | PHY layer      |         0 |         1 |         1 |         0 |
| PDI support for MII management interface enabled                                 | PHY layer      |         1 |         1 |         1 |         1 |
| Automatic MII TX shift enabled                                                   | PHY layer      |         1 |         1 |         1 |         1 |
| Extended RX Error counter registers 0x0314:0x0317 and 0x0320:0x0327 enabled      | PHY layer      |         0 |         0 |         0 |         0 |
| RUN LED enabled                                                                  | LEDs           |         1 |         1 |         1 |         1 |

<!-- image -->

| Chip Feature / Description                                                      | Domain   |   TMC8460 |   TMC8461 |   TMC8462 |   TMC8670 |
|---------------------------------------------------------------------------------|----------|-----------|-----------|-----------|-----------|
| Link/activity LEDs enabled                                                      | LEDs     |         1 |         1 |         1 |         1 |
| Port error LEDs enabled                                                         | LEDs     |         0 |         0 |         0 |         0 |
| RUN/ERR LED override registers 0x0138:0x0139 enabled                            | LEDs     |         0 |         1 |         1 |         1 |
| Con/uniFB01gurable SPI PDI modes enabled                                        | PDI      |         1 |         1 |         1 |         1 |
| Digital IO output register 0x0F00:0x0F03 disabled                               | PDI      |         0 |         0 |         0 |         0 |
| PDI user mode registers 0x0158/0x015C enabled                                   | PDI      |         0 |         0 |         0 |         0 |
| DC Latch unit enabled                                                           | DC       |         1 |         1 |         1 |         1 |
| External DC speed counter diff direct control register 0x0938 enabled           | DC       |         0 |         0 |         0 |         0 |
| DC Sync unit enabled                                                            | DC       |         1 |         1 |         1 |         1 |
| DC time loop control by PDI enabled                                             | DC       |         0 |         0 |         0 |         0 |
| DC with external local clock enabled                                            | DC       |         0 |         0 |         0 |         0 |
| EEPROM emulation enabled                                                        | EEPROM   |         0 |         0 |         0 |         0 |
| Removable PDI (socket communication) enabled                                    | EEPROM   |         0 |         0 |         0 |         0 |
| EEPROM RAM/ROM instead of I2C/emulation enabled                                 | EEPROM   |         0 |         0 |         0 |         0 |
| Parameter loading to 0x0580 enabled                                             | EEPROM   |         1 |         1 |         1 |         1 |
| EEPROM streaming support enabled                                                | EEPROM   |         0 |         0 |         0 |         0 |
| 8 Byte EEPROM read data enabled                                                 | EEPROM   |         1 |         0 |         0 |         0 |
| Con/uniFB01gurable EEPROM SIZE enabled                                          | EEPROM   |         1 |         1 |         1 |         1 |
| Extended ESC con/uniFB01guration register 0x0142:0x0143 (EEPROM word 5) enabled | EEPROM   |         0 |         0 |         0 |         0 |

Table 7: Available EtherCAT Chip Features (0 = not available/disabled, 1 = available/enabled

<!-- image -->

## 6.3 EtherCAT Register Overview

Address

0x0010:0x0011

0x0012:0x0013

0x0020

0x0021

0x0030

0x0031

0x0040

0x0041

0x0100:0x0103

0x0108:0x0109

0x0110:0x0111

Length

TMC8462A has an address space of 20 KByte. The /uniFB01rst block of 4KByte ( 0x0000:0x0FFF ) is reserved for the standard ESC- and EtherCAT-relevant con/uniFB01guration and status registers. The Process Data RAM (PDRAM) starts at address 0x1000 . TMC8462A has a Process Data RAM of 16 Kbyte.

|               | (Byte)   |                        |
|---------------|----------|------------------------|
|               |          | ESC Information        |
| 0x0000        | 1        | Type                   |
| 0x0001        | 1        | Revision               |
| 0x0002:0x0003 | 2        | Build                  |
| 0x0004        | 1        | FMMUs supported        |
| 0x0005        | 1        | SyncManagers supported |
| 0x0006        | 1        | RAM Size               |
| 0x0007        | 1        | Port Descriptor        |
| 0x0008:0x0009 | 2        | ESC Features supported |

2

2

1

1

1

1

1

4

1

2

2

Description

Station Address

Con/uniFB01gured Station Alias

Con/uniFB01gured Station Address

Write Protection

Write Register Protection

Write Register Enable

ESC Write Enable

ESC Write Protection

Data Link Layer

ESC Reset PDI

ESC Reset ECAT

ESC DL Control

ESC DL Status

Physical Read/Write Offset

<!-- image -->

Address

Length

Description

|               | (Byte)   |                                            |
|---------------|----------|--------------------------------------------|
|               |          | Application Layer                          |
| 0x0120:0x0121 | 2        | AL Control                                 |
| 0x0130:0x0131 | 2        | AL Status                                  |
| 0x0134:0x0135 | 2        | AL Status Code                             |
| 0x0138        | 1        | RUN LED Override                           |
| 0x0139        | 1        | ERR LED Override                           |
|               |          | PDI                                        |
| 0x0140        | 1        | PDI Control                                |
| 0x0141        | 1        | ESC Con/uniFB01guration                    |
| 0x014E:0x014F | 1        | PDI Information                            |
| 0x0150        | 4        | PDI SPI Slave Con/uniFB01guration          |
| 0x0151        | 4        | SYNC/LATCH PDI Con/uniFB01guration         |
| 0x0152:0x0153 | 4        | Extended PDI SPI Slave Con/uniFB01guration |
|               |          | Interrupts                                 |
| 0x0200:0x0201 | 2        | ECAT Event Mask                            |
| 0x0204:0x0207 | 4        | AL Event Mask                              |
| 0x0210:0x0211 | 2        | ECAT Event Request                         |
| 0x0220:0x0223 | 4        | AL Event Request                           |
|               |          | Error Counters                             |
| 0x0300:0x0307 | 4x2      | RX Error Counter[3:0]                      |
| 0x0308:0x030B | 4x1      | Forward RX Error Counter[3:0]              |
| 0x030C        | 1        | ECAT Processing Unit Error Counter         |
| 0x030D        | 1        | PDI Error Counter                          |
| 0x030E        | 1        | PDI Error Code                             |
| 0x0310:0x0313 | 4x1      | Lost Link Counter[3:0]                     |

<!-- image -->

Address

Length

|               | (Byte)   |                               |
|---------------|----------|-------------------------------|
|               |          | Watchdogs                     |
| 0x0400:0x0401 | 2        | Watchdog Divider              |
| 0x0410:0x0411 | 2        | Watchdog Time PDI             |
| 0x0420:0x0421 | 2        | Watchdog Time Process Data    |
| 0x0440:0x0441 | 2        | Watchdog Status Process Data  |
| 0x0442        | 1        | Watchdog Counter Process Data |
| 0x0443        | 1        | Watchdog Counter PDI          |

Description

SII EEPROM Interface

| 0x0500        | 1   | EEPROM Con/uniFB01guration   |
|---------------|-----|------------------------------|
| 0x0501        | 1   | EEPROM PDI Access State      |
| 0x0502:0x0503 | 2   | EEPROM Control/Status        |
| 0x0504:0x0507 | 4   | EEPROM Address               |
| 0x0508:0x050F | 4/8 | EEPROM Data                  |

MII Management Interface

| 0x0510:0x0511   |   2 | MII Management Control/Status    |
|-----------------|-----|----------------------------------|
| 0x0512          |   1 | PHY Address                      |
| 0x0513          |   1 | PHY Register Address             |
| 0x0514:0x0515   |   2 | PHY Data                         |
| 0x0516          |   1 | MII Management ECAT Access State |
| 0x0517          |   1 | MII Management PDI Access State  |
| 0x0518:0x051B   |   4 | PHY Port Status                  |

0x0580:0x05FF

128

ESC Parameter RAM

| 0x0580:0x05FF   | 128 max.   | TMC8xxx MFCIOBlock Con/uniFB01guration   |
|-----------------|------------|------------------------------------------|

<!-- image -->

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0600:0x06FF | 16x16    | FMMU[15:0]             |
| +0x0:0x3      | 4        | Logical Start Address  |
| +0x4:0x5      | 2        | Length                 |
| +0x6          | 1        | Logical Start bit      |
| +0x7          | 1        | Logical Stop bit       |
| +0x8:0x9      | 2        | Physical Start Address |
| +0xA          | 1        | Physical Start bit     |
| +0xB          | 1        | Type                   |
| +0xC          | 1        | Activate               |
| +0xD:0xF      | 3        | Reserved               |

0x0800:0x087F

Length

16x8

Description

SyncManager[15:0]

| +0x0:0x1   |   2 | Physical Start Address   |
|------------|-----|--------------------------|
| +0x2:0x3   |   2 | Length                   |
| +0x4       |   1 | Control Register         |
| +0x5       |   1 | Status Register          |
| +0x6       |   1 | Activate                 |
| +0x7       |   1 | PDI Control              |

0x0900:0x09FF

Distributed Clocks (DC)

|               |    | DC Receive Times    |
|---------------|----|---------------------|
| 0x0900:0x0903 |  4 | Receive Time Port 0 |
| 0x0904:0x0907 |  4 | Receive Time Port 1 |
| 0x0908:0x090B |  4 | Receive Time Port 2 |
| 0x090C:0x090F |  4 | Receive Time Port 3 |

<!-- image -->

Address

Length

Description

|               | (Byte)   |                                                |
|---------------|----------|------------------------------------------------|
|               |          | DC Time Loop Control Unit                      |
| 0x0910:0x0917 | 4/8      | System Time                                    |
| 0x0918:0x091F | 4/8      | Receive Time ECAT Processing Unit              |
| 0x0920:0x0927 | 4/8      | System Time Offset                             |
| 0x0928:0x092B | 4        | System Time Delay                              |
| 0x092C:0x092F | 4        | System Time Difference                         |
| 0x0930:0x0931 | 2        | Speed Counter Start                            |
| 0x0932:0x0933 | 2        | Speed Counter Diff                             |
| 0x0934        | 1        | System Time Difference Filter Depth            |
| 0x0935        | 1        | Speed Counter Filter Depth                     |
|               |          | DC Cyclic Unit Control                         |
| 0x0980        | 1        | Cyclic Unit Control                            |
|               |          | DC SYNC Out Unit                               |
| 0x0981        | 1        | Activation                                     |
| 0x0982:0x0983 | 2        | Pulse Length of SYNC signals                   |
| 0x0984        | 1        | Activation Status                              |
| 0x098E        | 1        | SYNC0 Status                                   |
| 0x098F        | 1        | SYNC1 Status                                   |
| 0x0990:0x0997 | 4/8      | Start Time Cyclic Operation / Next SYNC0 Pulse |
| 0x0998:0x099F | 4/8      | Next SYNC1 Pulse                               |
| 0x09A0:0x09A3 | 4        | SYNC0 Cycle Time                               |
| 0x09A4:0x09A7 | 4        | SYNC1 Cycle Time                               |

<!-- image -->

Address

Length

|               | (Byte)   |                                   |
|---------------|----------|-----------------------------------|
|               |          | DC LATCH In Unit                  |
| 0x09A8        | 1        | Latch0 Control                    |
| 0x09A9        | 1        | Latch1 Control                    |
| 0x09AE        | 1        | Latch0 Status                     |
| 0x09AF        | 1        | Latch1 Status                     |
| 0x09B0:0x09B7 | 4/8      | Latch0 Time Positive Edge         |
| 0x09B8:0x09BF | 4/8      | Latch0 Time Negative Edge         |
| 0x09C0:0x09C7 | 4/8      | Latch1 Time Positive Edge         |
| 0x09C8:0x09CF | 4/8      | Latch1 Time Negative Edge         |
|               |          | DC SyncManager Event Times        |
| 0x09F0:0x09F3 | 4        | EtherCAT Buffer Change Event Time |
| 0x09F8:0x09FB | 4        | PDI Buffer Start Event Time       |
| 0x09FC:0x09FF | 4        | PDI Buffer Change Event Time      |
| 0x0E00:0x0EFF | 256      | ESC Speci/uniFB01c                |
| 0x0E00:0x0E07 | 8        | Product ID                        |
| 0x0E08:0x0E0F | 8        | Vendor ID                         |
| 0x0F80:0x0FFF | 128      | User RAM                          |
| 0x0F80:0x0FFF | 20       | reserved                          |
|               |          | Process Data RAM                  |
| 0x1000:0xFFFF | 1-60KB   | Process Data RAM                  |

Description

Table 8: TMC8462A EtherCAT Registers

For Registers longer than one byte, the LSB has the lowest and MSB the highest address.

<!-- image -->

## 6.4 EtherCAT Register Set

## 6.4.1.1 Type ( 0x0000 )

## 6.4.1 ESC Information

Bit

Description

## 6.4.1.2 Revision ( 0x0001 )

Bit

Description

## 6.4.1.3 Build ( 0x0002:0x0003 )

Bit

Description

| 15:0   | Actual build of EtherCAT controller, minor version, maintenance version   | r/-   | r/-   | TMC8460: 0x10 TMC8461: 0x11 TMC8462: 0x11 TMC8670: 0x10   |
|--------|---------------------------------------------------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

Table 9: Register 0x0000 (Type)

| 7:0   | Type of EtherCAT controller   | r/-   | r/-   | TMC8460: 0xD0 TMC8461: 0xD0 TMC8462: 0xD0 TMC8670: 0xD0   |
|-------|-------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

PDI

PDI

Table 10: Register 0x0001 (Revision)

| 7:0   | Revision of EtherCAT controller   | r/-   | r/-   | TMC8460: 0x60 TMC8461: 0x61 TMC8462: 0x61 TMC8670: 0x70   |
|-------|-----------------------------------|-------|-------|-----------------------------------------------------------|

ECAT

Table 11: Register 0x0002 (Build)

PDI

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.1.4 FMMUs supported ( 0x0004 )

Bit

Description

ECAT

PDI

Table 12: Register 0x0004 (FMMUs)

| 7:0   | Number of supported FMMU channels (or en- tities) of the EtherCAT slave controlller.   | r/-   | r/-   | TMC8460: 6 TMC8461: 8 TMC8462: 8 TMC8670: 4   |
|-------|----------------------------------------------------------------------------------------|-------|-------|-----------------------------------------------|

## 6.4.1.5 SyncManagers supported ( 0x0005 )

Bit

Description

## 6.4.1.6 RAM Size ( 0x0006 )

Bit

Description

| 7:0   | Process Data RAMsize supported by the Ether- CAT Slave Controller in KByte   | r/-   | r/-   | TMC8460: 16 TMC8461: 16 TMC8462: 16 TMC8670: 4   |
|-------|------------------------------------------------------------------------------|-------|-------|--------------------------------------------------|

ECAT

Table 13: Register 0x0005 (SMs)

| 7:0   | Number of supported SyncManager channels (or entities) of the EtherCAT Slave Controller   | r/-   | r/-   | TMC8460: 6 TMC8461: 8 TMC8462: 8 TMC8670: 4   |
|-------|-------------------------------------------------------------------------------------------|-------|-------|-----------------------------------------------|

ECAT

PDI

PDI

Table 14: Register 0x0006 (RAM Size)

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.1.7 Port Descriptor ( 0x0007 )

Bit

Description

ECAT

PDI

Table 15: Register 0x0007 (Port Descriptor)

|     | Port con/uniFB01guration: 00: Not implemented 01: Not con/uniFB01gured (SII EEPROM) 10: EBUS 11: MII RMII RGMII   |     |     |                                                 |
|-----|-------------------------------------------------------------------------------------------------------------------|-----|-----|-------------------------------------------------|
| 1:0 | Port 0                                                                                                            | r/- | r/- | TMC8460: 11 TMC8461: 11 TMC8462: 11 TMC8670: 11 |
| 3:2 | Port 1                                                                                                            | r/- | r/- | TMC8460: 11 TMC8461: 11 TMC8462: 11 TMC8670: 11 |
| 7:4 | not supported                                                                                                     | r/- | r/- | 0                                               |

## 6.4.1.8 ESC Features supported ( 0x0008:0x0009 )

Bit

Description

|   0 | FMMU Operation: 0: Bit oriented 1: Byte oriented                                  |     | r/- r/-     |
|-----|-----------------------------------------------------------------------------------|-----|-------------|
|   1 | Reserved                                                                          | r/- | r/-         |
|   2 | Distributed Clocks: 0: Not available 1: Available                                 |     | r/- r/-     |
|   3 | Distributed Clocks (width): 0: 32 bit 1: 64 bit                                   |     | r/- r/- r/- |
|   4 | Low Jitter EBUS: 0: Not available, standard jitter 1: Available, jitter minimized | r/- | 0           |
|   5 | Enhanced Link Detection EBUS: 0: Not available 1: Available                       | r/- | 0           |
|   6 | Enhanced Link Detection MII 0: Not available 1: Available                         |     | r/- r/-     |

Reset Value

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

ECAT

PDI

Table 16: Register 0x0008:0x0009 (ESC Features)

| 7     | Separate Handling of FCS Errors: 0: Not supported 1: Supported, frames with wrong FCS and addi- tional nibble will be counted separately in For- warded RX Error Counter   | r/-   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 8     | Enhanced DCSYNC Activation 0: Not available 1: Available NOTE: This feature refers to registers 0x981.(7:3) , 0x0984                                                       | r/-   | r/-   |
| 9     | EtherCAT LRW command support: 0: Supported 1: Not Supported                                                                                                                | r/-   | r/-   |
| 10    | EtherCAT read/write command support 0: Supported 1: Not Supported                                                                                                          | r/-   | r/-   |
| 11    | Fixed FMMU/SyncManager con/uniFB01guration 0: Variable con/uniFB01guration 1: Fixed con/uniFB01guration (refer to documentation of supporting ESCs)                        | r/-   | r/-   |
| 15:12 | Reserved                                                                                                                                                                   | r/-   | r/-   |

Reset Value

<!-- image -->

## 6.4.2 Station Address

## 6.4.2.1 Con/uniFB01gured Station Address ( 0x0010:0x0011 )

Bit

Description

| 15:0   | Address used for node addressing (FPxx com- mands)   | r/w   | r/-   |
|--------|------------------------------------------------------|-------|-------|

ECAT

PDI

Table 17: Register 0x0010:0x0011 (Station Addr)

## 6.4.2.2 Con/uniFB01gured Station Alias ( 0x0012:0x0013 )

Bit

Description

| 15:0   | Alias Address used for node addressing (FPxx commands) The use of this alias is activated by Register DL Control Bit 24 ( 0x0100.24 / 0x0103.0 ) NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on reset.   | r/-   | r/w   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 18: Register 0x0012:0x0013 (Station Alias)

Reset Value

Reset Value

<!-- image -->

## 6.4.3 Write Protection

## 6.4.3.1 Write Register Enable ( 0x0020 )

Bit

Description

| 0   | If write register protection is enabled, this register has to be written in the same Ether- net frame (value does not care) before other writes to this station are allowed. Write pro- tection is still active after this frame (if Write Register Protection register is not changed).   | r/w   | r/-   |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:1 | Reserved, wirte 0                                                                                                                                                                                                                                                                          | r/-   | r/-   |

ECAT

PDI

Table 19: Register 0x0020 (Write Register Enable)

## 6.4.3.2 Write Register Protection ( 0x0021 )

Bit

Description

| 0   | Write register protection: 0: Protection disabled 1: Protection enabled Registers 0x0000-0x0137 , 0x013A-0x0F0F write protected, except for 0x0030   | r/w   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:1 | Reserved, write 0                                                                                                                                    | r/-   | r/-   |

ECAT

PDI

Table 20: Register 0x0021 (Write Register Prot.)

## 6.4.3.3 ESC Write Enable ( 0x0030 )

Bit

Description

ECAT

PDI

Table 21: Register 0x0030 (ESC Write Enable)

| 0   | If ESC write protection is enabled, this register has to be written in the same Ethernet frame (value does not care) before other writes to this station are allowed. ESC write protection is still active after this frame (if ESC Write Pro- tection register is not changed).   | r/w   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:1 | Reserved, write 0                                                                                                                                                                                                                                                                  | r/-   | r/-   |

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.3.4 ESC Write Protection ( 0x0031 )

Bit

Description

ECAT

PDI

Table 22: Register 0x0031 (ESC Write Prot.)

| 15:0   | Write protect: 0: Protection disabled 1: Protection enabled All areas are write protected, except 0x0030 .   | r/w   | r/-   |
|--------|--------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:1    | Reserved, write 0                                                                                            | r/-   | r/-   |

Reset Value

<!-- image -->

## 6.4.4 Data Link Layer

## 6.4.4.1 ESC Reset ECAT ( 0x0040 )

Bit

Description

| Write   |                                                                                                                |     |     |
|---------|----------------------------------------------------------------------------------------------------------------|-----|-----|
| 7:0     | Reset is asserted after writing 0x52 ('R'), 0x45 ('E'), 0x53 ('S') in this register with 3 consecutive frames. | r/w | r/- |
| Read    |                                                                                                                |     |     |
| 1:0     | Progress of the reset procedure: 01: after writing 0x52 10: after writing 0x45 (if 0x52 was written) 00: else  | r/w | r/- |
| 7:2     | Reserved, write 0                                                                                              | r/- | r/- |

ECAT

PDI

Table 23: Register 0x0040 (ESC Reset ECAT)

## 6.4.4.2 ESC Reset PDI ( 0x0041 )

Bit

Description

| Write   |                                                                                                                  |     |     |
|---------|------------------------------------------------------------------------------------------------------------------|-----|-----|
| 7:0     | Reset is asserted after writing 0x52 ('R'), 0x45 ('E'), 0x53 ('S') in this register with 3 consecutive commands. | r/- | r/w |
| Read    |                                                                                                                  |     |     |
| 1:0     | Progress of the reset procedure: 01: after writing 0x52 10: after writing 0x45 (if 0x52 was written) 00: else    | r/- | r/w |
| 7:2     | Reserved, write 0                                                                                                | r/- | r/- |

ECAT

PDI

Table 24: Register 0x0041 (ESC Reset PDI)

Reset Value

Reset Value

<!-- image -->

## 6.4.4.3 ESC DL Control ( 0x0100:0x0103 )

Bit

Description

| 0     | Forwarding rule: 0: EtherCAT frames are processed, Non-EtherCAT frames are forwarded without processing 1: EtherCAT frames are processed, Non- EtherCAT frames are destroyed The source MAC address is changed for every frame (SOURCE_MAC[1] is set to 1 - locally ad- ministered address) regardless of the forward- ing rule.                                                                                                                                                                               | r/-   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 1     | Temporary use of settings in Register 0x101 : 0: permanent use 1: use for about 1 second, then revert to previ- ous settings                                                                                                                                                                                                                                                                                                                                                                                   | r/-   | r/-   |
| 7:2   | Reserved, write 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | r/-   | r/-   |
| 9:8   | Loop Port 0: 00: Auto 01: Auto Close 10: Open 11: Closed NoteLoopopenmeanssending/receivingover this port is enabled, loop closed means send- ing/receiving is disabled and frames are for- warded to the next open port internally. Auto: loop closed at link down, opened at link up Auto Close: loop closed at link down, opened with writing 01 again after link up (or receiving avalidEthernetframeattheclosedport)Open: loop open regardless of link state Closed: loop closed regardless of link state | r/w*  | r/-   |
| 11:10 | Loop Port 1: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |
| 13:12 | Loop Port 2: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |
| 15:14 | Loop Port 3: 00: Auto 01: Auto Close 10: Open 11: Closed                                                                                                                                                                                                                                                                                                                                                                                                                                                       | r/w*  | r/-   |

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

ECAT

PDI

Table 25: Register 0x0100:0x0103 (DL Control)

| 18:16   | RX FIFO Size (ESC delays start of forwarding until FIFO is at least half full). RX FIFO Size/RX delay reduction** : Value (for MII): 0: -40 ns 1: -40 ns 2: -40 ns 3: -40 ns 4: no change 5: no change 6: no change 7: default default NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on or reset   | r/w   | r/-   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 19      | EBUS Low Jitter: 0: Normal jitter / 1: Reduced jitter                                                                                                                                                                                                                                                                             | r/w   | r/-   |
| 21:20   | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/w   | r/-   |
| 22      | EBUS remote link down signaling time: 0: Default ( ≈ 660 ms) 1: Reduced ( ≈ 80 µ s)                                                                                                                                                                                                                                               | r/w   | r/-   |
| 23      | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/w   | r/-   |
| 24      | Station alias: 0: Ignore Station Alias 1: Alias can be used for all con/uniFB01gured address command types (FPRD, FPWR, . . . )                                                                                                                                                                                                   | r/w   | r/-   |
| 31:25   | Reserved, write 0                                                                                                                                                                                                                                                                                                                 | r/-   | r/-   |

* Loop con/uniFB01guration changes are delayed until end of currently received or transmitted frame at the port. ** The possibility of RX FIFO Size reduction depends on the clock source accuracy of the ESC and of every connected EtherCAT/Ethernet devices (master, slave, etc.). RX FIFO Size of 7 is su/uniFB03cient for 100ppm accuracy, FIFO Size 0 is possible with 25ppm accuracy (frame size of 1518/1522 Byte).

## 6.4.4.4 Physical Read/Write Offset ( 0x0108:0x0109 )

Bit

Description

| 15:0   | Offset of R/W Commands (FPRW, APRW) between Read address and Write address. RD_ADR = ADR and WR_ADR = ADR + R/W- Offset 0   | r/w   | r/-   |
|--------|-----------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 26: Register 0x0108:0x0109 (R/W Offset)

Reset Value

Reset Value

<!-- image -->

## 6.4.4.5 ESC DL Status ( 0x0110:0x0111 )

Bit

Description

| 0   | PDI operational/EEPROM loaded correctly: 0: EEPROMnotloaded, PDI not operational (no access to Process Data RAM) 1: EEPROM loaded correctly, PDI operational (access to Process Data RAM)   | r*/-   | r/-   |    |
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-------|----|
| 1   | PDI Watchdog Status: 0: Watchdog expired 1: Watchdog reloaded                                                                                                                               | r*/-   | r/-   |    |
| 2   | Enhanced Link detection: 0: Deactivated for all ports 1: Activated for at least one port NOTE: EEPROM value is only taken over at /uniFB01rst EEPROM load after power-on or reset           | r*/-   | r/-   |    |
| 3   | Reserved                                                                                                                                                                                    | r*/-   | r/-   |    |
| 4   | Physical link on Port 0: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| 5   | Physical link on Port 1: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| 6   | Physical link on Port 2: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| 7   | Physical link on Port 3: 0: No link 1: Link detected                                                                                                                                        | r*/-   | r/-   |    |
| 8   | Loop Port 0: 0: Open 1: Closed                                                                                                                                                              | r*/-   | r/-   |    |
| 9   | Communication on Port 0: 0: No stable communication 1: Communication established                                                                                                            | r*/-   | r/-   |    |
| 10  | Loop Port 1: 0: Open 1: Closed                                                                                                                                                              | r*/-   | r/-   |    |
|     | Communication on Port 1: 0: No stable communication 1: Communication established                                                                                                            | r*/-   | r/-   | 11 |
| 12  | Loop Port 2: Open 1: Closed                                                                                                                                                                 | r*/-   | r/-   | 0: |
| 13  | Communication on Port 2: No stable communication 1: Communication established                                                                                                               | r*/-   | r/-   | 0: |

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

Register

ECAT

PDI

Table 27: Register 0x0110:0x0111 (DL Status)

|   14 | Loop Port 3: 0: Open 1: Closed                                                   | r*/-   | r/-   |
|------|----------------------------------------------------------------------------------|--------|-------|
|   15 | Communication on Port 3: 0: No stable communication 1: Communication established | r*/-   | r/-   |

* Reading DL Status register from ECAT clears ECAT Event Request 0x0210.2 .

| 0x0111   |                 |                 |                 |                 |
|----------|-----------------|-----------------|-----------------|-----------------|
| 0x55     | No link, closed | No link, closed | No link, closed | No link, closed |
| 0x56     | No link, closed | No link, closed | No link, closed | Link, open      |
| 0x59     | No link, closed | No link, closed | Link, open      | No link, closed |
| 0x5A     | No link, closed | No link, closed | Link, open      | Link, open      |
| 0x65     | No link, closed | Link, open      | No link, closed | No link, closed |
| 0x66     | No link, closed | Link, open      | No link, closed | Link, open      |
| 0x69     | No link, closed | Link, open      | Link, open      | No link, closed |
| 0x6A     | No link, closed | Link, open      | Link, open      | Link, open      |
| 0x95     | Link, open      | No link, closed | No link, closed | No link, closed |
| 0x96     | Link, open      | No link, closed | No link, closed | Link, open      |
| 0x99     | Link, open      | No link, closed | Link, open      | No link, closed |
| 0x9A     | Link, open      | No link, closed | Link, open      | Link, open      |
| 0xA5     | Link, open      | Link, open      | No link, closed | No link, closed |
| 0xA6     | Link, open      | Link, open      | No link, closed | Link, open      |
| 0xA9     | Link, open      | Link, open      | Link, open      | No link, closed |
| 0xAA     | Link, open      | Link, open      | Link, open      | Link, open      |
| 0xD5     | Link, closed    | No link, closed | No link, closed | No link, closed |
| 0xD6     | Link, closed    | No link, closed | No link, closed | Link, open      |
| 0xD9     | Link, closed    | No link, closed | Link, open      | No link, closed |
| 0xDA     | Link, closed    | No link, closed | Link, open      | Link, open      |

Port 3

Port2

Port1

Reset Value

Port 0

Table 28: Decoding port state in ESC DL Status register 0x0111 (typical modes only)

<!-- image -->

## 6.4.5 Application Layer

## 6.4.5.1 AL Control ( 0x0120:0x0121 )

Bit

Description

## Note

| 3:0   | Initiate State Transition of the Device State Ma- chine: 1: Request Init State 3: Request Bootstrap State 2: Request Pre-Operational State 4: Request Safe-Operational State 8: Request Operational State   | r/(w)   | r/ (wack)*   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------|
| 4     | Error Ind Ack: 0: No Ack of Error Ind in AL status register 1: Ack of Error Ind in AL status register                                                                                                       | r/(w)   | r/ (wack)*   |
| 4     | Device Identi/uniFB01cation: 0: No request 1: Device Identi/uniFB01cation request                                                                                                                           | r/(w)   | r/ (wack)*   |
| 15:6  | Reserved, write 0                                                                                                                                                                                           | r/(w)   | r/ (wack)*   |

ECAT

PDI

Table 29: Register 0x0120:0x0121 (AL Cntrl)

AL Control register behaves like a mailbox if Device Emulation is off ( 0x0140.8 =0): The PDI has to read/write* the AL Control register after ECAT has written it. Otherwise ECAT cannot write again to the AL Control register. After Reset, AL Control register can be written by ECAT. (Regarding mailbox functionality, both registers 0x0120 and 0x0121 are equivalent, e.g. reading 0x0121 is su/uniFB03cient to make this register writeable again.)

* PDI register function acknowledge by Write command is disabled: Reading AL Control from PDI clears AL Event Request 0x0220.0 . Writing to this register from PDI is not possible.

If Device Emulation is on, the AL Control register can always be written, its content is copied to the AL Status register.

PDI register function acknowledge by Write command is enabled: Writing AL Control from PDI clears AL Event Request 0x0220.0 . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Reset Value

## 6.4.5.2 AL Status ( 0x0130:0x0131 )

Bit

## Note

* Reading AL Status from ECAT clears ECAT Event Request 0x0210.3 .

Description

ECAT

PDI

Table 30: Register 0x0130:0x0131 (AL Status)

| 3:0   | Actual State of the Device State Machine: 1: Init State 3: Request Bootstrap State 2: Pre-Operational State 4: Safe-Operational State 8: Operational State      | r*/-   | r/(w)   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|---------|
| 4     | Error Ind: 0: Device is in State as requested or Flag cleared by command 1: Device has not entered requested State or changed State as result of a local action | r*/-   | r/(w)   |
| 5     | Device Identi/uniFB01cation: 0: Device Identi/uniFB01cation not valid 1: Device Identi/uniFB01cation loaded                                                     | r*/-   | r/(w)   |
| 15:6  | Reserved, write 0                                                                                                                                               | r*/-   | r/(w)   |

AL Status register is only writable from PDI if Device Emulation is off ( 0x0140.8 =0), otherwise AL Status register will re/uniFB02ect AL Control register values.

## 6.4.5.3 AL Status Code ( 0x0134:0x0135 )

Bit

Description

ECAT

PDI

Table 31: Register 0x0134:0x0135 (AL Status Code)

| 15:0   | AL Status Code   | r/-   | r/w   |
|--------|------------------|-------|-------|

Reset Value

Reset Value

<!-- image -->

## 6.4.5.4 RUN LED Override ( 0x0138 )

Bit

Note

Description

ECAT

PDI

Table 32: Register 0x0138 (RUN LED Override)

| 3:0   | LED code: (FSM State) 0x0 : Off (1-Init) 0x1-0xC : Flash 1x - 12x (4-SafeOp 1x) 0xD : Blinking (2-PreOp) 0xE : Flickering (3-Bootrap) 0xF : On   | r/w   | r/w   |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 4     | Enable Override: 0: Override disabled 1: Override enabled                                                                                        | r/w   | r/w   |
| 7:5   | Reserved, write 0                                                                                                                                | r/w   | r/w   |

ChangestoALStatusregister ( 0x0130 ) with valid values will disable RUN LED Override ( 0x0138.4 =0). The value read in this register always re/uniFB02ects current LED output.

## 6.4.5.5 ERR LED Override ( 0x0139 )

Bit

Note

Description

ECAT

PDI

Table 33: Register 0x0139 (ERR LED Override)

| 3:0   | LED code: 0x0 : Off 0x1-0xC : Flash 1x - 12x 0xD : Blinking 0xE : Flickering 0xF : On   | r/w   | r/w   |
|-------|-----------------------------------------------------------------------------------------|-------|-------|
| 4     | Enable Override: 0: Override disabled 1: Override enabled                               | r/w   | r/w   |
| 7:5   | Reserved, write 0                                                                       | r/w   | r/w   |

Newerror conditions will disable ERR LED Override ( 0x0139.4 =0). The value read in this register always re/uniFB02ects current LED output.

<!-- image -->

Reset Value

Reset Value

## 6.4.6 PDI

## 6.4.6.1 PDI Control ( 0x0140 )

Bit

Description

| 7:0   | Process data interface: 0x00 : Interface deactivated (no PDI) . . . 0x05 : SPI Slave . . . 0x80 : On-chip bus Others: Reserved   | r/-   | r/-   | TMC8460, TMC8461, TMC8462, TMC8670: 0x00 later EEPROM ADR 0x0000 only SPI Slave ( 0x05 ) is supported in the hard- ware   |
|-------|----------------------------------------------------------------------------------------------------------------------------------|-------|-------|---------------------------------------------------------------------------------------------------------------------------|

ECAT

PDI

Table 34: Register 0x0140 (PDI Control)

## 6.4.6.2 ESC Con/uniFB01guration ( 0x0141 )

Bit

Description

ECAT

PDI

Table 35: Register 0x0141 (ESC Con/uniFB01g)

|   0 | Device emulation (control of AL status): 0: AL status register has to be set by PDI 1: AL status register will be set to value written to AL control register   | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|   1 | Enhanced Link detection all ports: 0: disabled (if bits [7:4]=0) 1: enabled at all ports (overrides bits [7:4])                                                 | r/-   | r/-   |
|   2 | Distributed Clocks SYNC Out Unit: 0: disabled (power saving) / 1: enabled                                                                                       | r/-   | r/-   |
|   3 | Distributed Clocks Latch In Unit: 0: disabled (power saving) / 1: enabled                                                                                       | r/-   | r/-   |
|   4 | Enhanced Link port 0: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
|   5 | Enhanced Link port 1: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
|   6 | Enhanced Link port 2: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |
|   7 | Enhanced Link port 3: 0: disabled (if bit 1=0) / 1: enabled                                                                                                     | r/-   | r/-   |

Reset Value

Reset Value

<!-- image -->

## 6.4.6.3 PDI Information ( 0x014E:0x014F )

Bit

Description

| 0   | PDI register function acknowledge by write: 0: Disabled 1: Enabled                                | r/w   | r/-   |   Depends on con/uniFB01guration |
|-----|---------------------------------------------------------------------------------------------------|-------|-------|----------------------------------|
| 1   | PDI con/uniFB01gured: 0: PDI not con/uniFB01gured 1: PDI con/uniFB01gured (EEPROM loaded)         | r/w   | r/-   |                                0 |
| 2   | PDI active: 0: PDI not active 1: PDI active                                                       | r/w   | r/-   |                                0 |
| 3   | PDI con/uniFB01guration invalid: 0: PDI con/uniFB01guration ok 1: PDI con/uniFB01guration invalid | r/w   | r/-   |                                0 |
| 7:4 | Reserved                                                                                          | r/w   | r/-   |                                0 |

ECAT

PDI

Table 36: Register 0x014E (PDI Information))

Reset Value

<!-- image -->

## 6.4.6.4 PDI SPI Slave Con/uniFB01guration ( 0x0150 )

Bit

Description

The PDI con/uniFB01guration register 0x0150 and the extended PDI con/uniFB01guration registers 0x0152:0x0153 depend on the selected PDI. The Sync/Latch[1:0] PDI con/uniFB01guration register 0x0151 is independent of the selected PDI. The TMC8460, TMC8461, TMC8462, and TMC8670 devices support SPI Slave PDI only.

| 1:0   | SPI mode: 00: SPI mode 0 01: SPI mode 1 10: SPI mode 2 11: SPI mode 3 NOTE: SPI mode 3 is recommended for Slave Sample Code NOTE: SPI status /uniFB02ag is not available in SPI modes 0 and 2 with normal data out sample.   | r/-   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 3:2   | SPI_IRQ output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)                                                                                 | r/-   | r/-   |
| 4     | SPI_CSNL polarity: 0: Active low 1: Active high                                                                                                                                                                              | r/-   | r/-   |
| 5     | Data Out sample mode: 0: Normalsample(SPI_MISO andSPI_MOSI are sampled at the same SPI_CLK edge) 1: Late sample (SPI_MISO and SPI_MOSI are sampled at different SPI_CLK edges)                                               | r/-   | r/-   |
| 7:6   | Reserved, set EEPROM value 0                                                                                                                                                                                                 | r/-   | r/-   |

ECAT

PDI

Table 37: Register 0x0150 (PDI SPI CFG)

## 6.4.6.5 SYNC/LATCH Con/uniFB01guration ( 0x0151 )

Bit

Description

|   1:0 | SYNC0 output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)   | r/-   | r/-   | TMC8461: 10 TMC8462: 10                            |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------------------------------------------------|
|     2 | SYNC0/LATCH0 con/uniFB01guration: 0: LATCH0 Input 1: SYNC0 Output                                                                            | r/-   | r/-   | TMC8461: 1 TMC8462: 1                              |
|     3 | SYNC0 mapped to AL Event Request register 0x0220.2 : 0: Disabled 1: Enabled                                                                  | r/-   | r/-   | TMC8461, TMC8462: de- pends on con/uniFB01guration |

Reset Value

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

ECAT

PDI

Table 38: Register 0x0151 (SYNC/LATCH CFG)

|   5:4 | SYNC1 output driver/polarity: 00: Push-Pull active low 01: Open Drain (active low) 10: Push-Pull active high 11: Open Source (active high)   | r/-   | r/-   | TMC8461: 10 TMC8462: 10                            |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------------------------------------------------|
|     6 | SYNC1/LATCH1 con/uniFB01guration*: 0: LATCH1 input 1: SYNC1 output                                                                           | r/-   | r/-   | TMC8461: 1 TMC8462: 1                              |
|     7 | SYNC1 mapped to AL Event Request register 0x0220.3 : 0: Disabled 1: Enabled                                                                  | r/-   | r/-   | TMC8461, TMC8462: de- pends on con/uniFB01guration |

## 6.4.6.6 PDI SPI Slave Extended Con/uniFB01guration ( 0x0152:0x0153 )

Bit

Description

ECAT

PDI

Table 39: Register 0x0152:0x0153 (PDI SPI extCFG)

| 15:0   | Reserved, set EEPROM value 0   | r/-   | r/-   | TMC8461: 0 TMC8462: 0   |
|--------|--------------------------------|-------|-------|-------------------------|

Reset Value

Reset Value

<!-- image -->

## 6.4.7 Interrupts

## 6.4.7.1 ECAT Event Mask ( 0x0200:0x0201 )

Bit

Description

| 15:0   | ECATEventmaskingoftheECATEventRequest Events for mapping into ECAT event /uniFB01eld of EtherCAT frames: 0: Corresponding ECAT Event Request register bit is not mapped 1: Corresponding ECAT Event Request register bit is mapped   | r/w   | r/-   |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 40: Register 0x0200:0x0201 (ECAT Event M.)

## 6.4.7.2 AL Event Mask ( 0x0204:0x0207 )

Bit

Description

ECAT

PDI

Table 41: Register 0x0204:0x0207 (AL Event Mask)

| 31:0   | AL Event masking of the AL Event Request reg- ister Events for mapping to PDI IRQ signal: 0: Corresponding AL Event Request register bit is not mapped 1: Corresponding AL Event Request register bit is mapped   | r/-   | r/w   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

## 6.4.7.3 ECAT Event Request ( 0x0210:0x0211 )

Bit

Description

|   0 | DC Latch event: 0: No change on DC Latch Inputs 1: AtleastonechangeonDCLatchInputs(Bitis cleared by reading DC Latch event times from ECAT for ECAT controlled Latch Units, so that Latch 0/1 Status 0x09AE:0x09AF indicates no event)   | r/-   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|   1 | Reserved                                                                                                                                                                                                                                 | r/-   | r/-   |
|   2 | DL Status event: 0: No change in DL Status 1: DL Status change (Bit is cleared by reading out DL Status 0x0110:0x0111 from ECAT)                                                                                                         | r/-   | r/-   |

Reset Value

Reset Value

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

ECAT

PDI

Table 42: Register 0x0210:0x0211 (ECAT Event R.)

| 3     | AL Status event: 0: No change in AL Status 1: AL Status change (Bit is cleared by reading out AL Status 0x0130:0x0131 from ECAT)                                                                                                  | r/-   | r/-   |     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| 4 5   | Mirrors values of each SyncManager Status: 0: No Sync Channel 0 event 1: Sync Channel 0 event pending 0: No Sync Channel 1 event 1: Sync Channel 1 event pending . . . 0: No Sync Channel 7 event 1: Sync Channel 7 event pending | r/w   | r/-   | ... |
| 15:12 | Reserved                                                                                                                                                                                                                          | r/-   | r/-   |     |

## 6.4.7.4 AL Event Request ( 0x0220:0x0223 )

Bit

Description

ECAT

PDI

Reset Value

Reset Value

|   0 | AL Control event: 0: No AL Control Register change 1: AL Control Register has been written 1 (Bit is cleared by reading AL Control register 0x0120:0x0121 from PDI)                                                                                       | r/-   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|   1 | DC Latch event: 0: No change on DC Latch Inputs 1: At least one change on DC Latch Inputs (Bit is cleared by reading DC Latch event times from PDI, so that Latch 0/1 Status 0x09AE:0x09AF indicates no event. Available if Latch Unit is PDI controlled) | r/-   | r/-   |
|   2 | State of DC SYNC0 (if register 0x0151.3 =1): (Bit is cleared by reading SYNC0 status 0x098E from PDI, use only in Acknowledge mode)                                                                                                                       | r/-   | r/-   |
|   3 | State of DC SYNC1 (if register 0x0151.7 =1): (Bit is cleared by reading of SYNC1 status 0x098F from PDI, use only in Acknowledge mode)                                                                                                                    | r/-   | r/-   |

<!-- image -->

Bit

Description

ECAT

PDI

Table 43: Register 0x0220:0x0223 (AL Event R.)

| 4     | SyncManager activation register (SyncMan- ager register offset 0x6 ) changed: 0: No change in any SyncManager 1: At least one SyncManager changed (Bit is cleared by reading SyncManager Activa- tion registers 0x0806 etc. from PDI)                                                  | r/-   | r/-   |        |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|--------|
| 5     | EEPROM Emulation: 0: No command pending 1: EEPROM command pending (Bit is cleared by acknowledging the command in EEPROM command register 0x0502 from PDI)                                                                                                                             | r/-   | r/-   |        |
| 6     | Watchdog Process Data: 0: Has not expired 1: Has expired (Bit is cleared by reading Watchdog Status Pro- cess Data 0x0440 from PDI)                                                                                                                                                    | r/-   | r/-   |        |
| 7     | Reserved                                                                                                                                                                                                                                                                               | r/-   | r/-   |        |
| 8 9   | SyncManager interrupts (SyncManager regis- ter offset 0x5, bit [0] or [1]): 0: No SyncManager 0 interrupt 1: SyncManager 0 interrupt pending 0: No SyncManager 1 interrupt 1: SyncManager 1 interrupt pending . . . 0: No SyncManager 15 interrupt 1: SyncManager 15 interrupt pending | r/-   | r/-   | ... 23 |
| 31:24 | Reserved                                                                                                                                                                                                                                                                               | r/-   | r/-   |        |

Reset Value

<!-- image -->

## 6.4.8 Error Counters

Errors are only counted if the corresponding port is enabled.

## 6.4.8.1 RX Error Counter[3:0] ( 0x0300:0x0307 )

Bit

Description

| 7:0   | Invalid frame counter of Port y (counting is stopped when 0xFF is reached).                                                 | r/ w(clr)   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------|-------------|-------|
| 15:8  | RX Error counter of Port y (counting is stopped when 0xFF is reached). This is coupled directly to RX ERR of MII interface. | r/ w(clr)   | r/-   |

ECAT

PDI

Table 44: Register 0x0300:0x0307 (RX Err Cnt)

## 6.4.8.2 Forward RX Error Counter[3:0] ( 0x0308:0x030B )

Bit

Description

ECAT

PDI

Table 45: Register 0x0308:0x030B (FW RX Err Cnt)

| 7:0   | Forwarded error counter of Port y (counting is stopped when 0xFF is reached).   | r/ w(clr)   | r/-   |
|-------|---------------------------------------------------------------------------------|-------------|-------|

Error Counters 0x0300 -0x030B are cleared if one of the RX Error counters 0x0300 -0x030B is written. Write value is ignored (write 0).

| Note   | 0x0300 0x030B 0x0300 0x030B is written. Write value is ignored (write 0).   |
|--------|-----------------------------------------------------------------------------|

## 6.4.8.3 ECAT Processing Unit Error Counter ( 0x030C )

Bit

Note

Description

| 7:0   | ECAT Processing Unit error counter (counting is stopped when 0xFF is reached). Counts errors of frames passing the Processing Unit (e.g., FCS is wrong or datagram structure is wrong).   | r/ w(clr)   | r/-   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 46: Register 0x030C (Proc. Unit Err Cnt)

Error Counter 0x030C is cleared if error counter 0x030C is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

Reset Value

## 6.4.8.4 PDI Error Counter ( 0x030D )

Bit

Note

Description

ECAT

PDI

Table 47: Register 0x030D (PDI Err Cnt)

| 7:0   | PDI Error counter (counting is stopped when 0xFF is reached). Counts if a PDI access has an interface error.   | r/ w(clr)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------|-------------|-------|

Error Counter 0x030D and Error Code 0x030E are cleared if error counter 0x030D is written. Write value is ignored (write 0).

## 6.4.8.5 PDI Error Code ( 0x030E )

Bit

Description

ECAT

PDI

Table 48: Register 0x030E (PDI Err Code)

|     | SPI access which caused last PDI Error. Cleared if register 0x030D is written.   | r/-   | r/-   |
|-----|----------------------------------------------------------------------------------|-------|-------|
| 2:0 | Number of SPI clock cycles of whole access (modulo 8)                            | r/-   | r/-   |
| 3   | Busy violation during read access                                                | r/-   | r/-   |
| 4   | Read termination missing                                                         | r/-   | r/-   |
| 5   | Access continued after read termination byte                                     | r/-   | r/-   |
| 7:6 | SPI command CMD[2:1]                                                             | r/-   | r/-   |

Error Counter 0x030D and Error Code 0x030E are cleared if error counter 0x030D is written. Write value is ignored (write 0).

| Note   | 0x030D 0x030E 0x030D is written. Write value is ignored (write 0).   |
|--------|----------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

## 6.4.8.6 Lost Link Counter[3:0] ( 0x0310:0x0313 )

Bit

Note

Description

| 7:0   | Lost Link counter of Port y (counting is stopped when 0xff is reached). Counts only if port loop is Auto.   | r/w(clr)   | r/-   |
|-------|-------------------------------------------------------------------------------------------------------------|------------|-------|

ECAT

PDI

Table 49: Register 0x0310:0x0313 (LL Counter)

Only lost links at open ports are counted. Lost Link Counters 0x0310 -0x0313 are cleared if one of the Lost Link Counters 0x0310 -0x0313 is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

## 6.4.9 Watchdogs

## 6.4.9.1 Watchdog Divider ( 0x0400:0x0401 )

Bit

Description

| 15:0   | Watchdog Time PDI: number or basic watch- dog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 50: Register 0x0400:0x0401 (WD Divider)

## 6.4.9.2 Watchdog Time PDI ( 0x0410:0x0411 )

Bit

Description

| 15:0   | Watchdog Time PDI: number or basic watch- dog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 51: Register 0x0410:0x0411 (WD Time PDI)

Watchdog is disabled if Watchdog time is set to 0x0000 . Watchdog is restarted with every PDI access.

| Note   | 0x0000 with every PDI access.   |
|--------|---------------------------------|

## 6.4.9.3 Watchdog Time Process Data ( 0x0420:0x0421 )

Bit

Description

| 15:0   | Watchdog Time Process Data: numberofbasic watchdog increments (Default value with Watchdog divider 100 µ s means 100ms Watchdog)   | r/w   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 52: Register 0x0420:0x0421 (WD Time PD)

| Note   | time is set to 0x0000 . Watchdog is restarted with every write access to SyncMan- agers with Watchdog Trigger Enable Bit set.   |
|--------|---------------------------------------------------------------------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

Reset Value

## 6.4.9.4 Watchdog Status Process Data ( 0x0440:0x0441 )

Bit

Description

|   15:0 | Watchdog Status of Process Data (triggered by SyncManagers) 0: Watchdog Process Data expired 1: Watchdog Process Data is active or disabled   | r/-   | r/ (w ack)*   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------|
|      0 | Reserved                                                                                                                                      | r/-   | r/ (w ack)*   |

ECAT

PDI

Table 53: Register 0x0440:0x0441 (WD Status PD)

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears AL Event Request 0x0220.6 . Writing to this register from PDI is not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request 0x0220.6 . Writing to this register from PDI is possible; write value is ignored (write 0).

## 6.4.9.5 Watchdog Counter Process Data ( 0x0442 )

Bit

Note

Description

| 7:0   | Watchdog Counter Process Data (counting is stopped when 0xFF is reached). Counts if Pro- cess Data Watchdog expires.   | r/ w(clr)   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 54: Register 0x0442 (WD Counter PD)

Watchdog Counters 0x0442 -0x0443 are cleared if one of the Watchdog Counters 0x0442 -0x0443 is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

## 6.4.9.6 Watchdog Counter PDI ( 0x0443 )

Bit

Note

Description

| 7:0   | Watchdog PDI counter (counting is stopped when 0xFF is reached). Counts if PDI Watchdog expires.   | r/ w(clr)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------|-------------|-------|

ECAT

PDI

Table 55: Register 0x0443 (WD Counter PDI)

WatchdogCounters 0x0442 &amp; 0x0443 are cleared if one of the Watchdog Counters 0x0442 &amp; 0x0443 is written. Write value is ignored (write 0).

<!-- image -->

Reset Value

## 6.4.10 SII EEPROM Interface

Address

Length

|               | (Byte)   |                            |
|---------------|----------|----------------------------|
|               |          | SII EEPROM Interface       |
| 0x0500        | 1        | EEPROM Con/uniFB01guration |
| 0x0501        | 1        | EEPROM PDI Access State    |
| 0x0502:0x0503 | 2        | EEPROM Control/Status      |
| 0x0504:0x0507 | 4        | EEPROM Address             |
| 0x0508:0x050F | 4/8      | EEPROM Data                |

Description

Table 56: SII EEPROM Interface Register Overview

## 6.4.10.1 EEPROM Con/uniFB01guration ( 0x0500 )

Bit

Description

| 0   | EEPROM control is offered to PDI: 0: no 1: yes (PDI has EEPROM control)     | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------|-------|-------|
| 1   | Force ECAT access: 0: Do not change Bit 0x0501.0 1: Reset Bit 0x0501.0 to 0 | r/w   | r/-   |
| 7:2 | Reserved, write 0                                                           | r/w   | r/-   |

ECAT

PDI

Table 57: Register 0x0500 (PROM Con/uniFB01g)

## 6.4.10.2 EEPROM PDI Access State ( 0x0501 )

Bit

## Note

Description

| 0   | Access to EEPROM: 0: PDI releases EEPROM access 1: PDI takes EEPROM access (PDI has EEPROM control)   | r/-   | r/(w)   |
|-----|-------------------------------------------------------------------------------------------------------|-------|---------|
| 7:1 | Reserved, write 0                                                                                     | r/-   | r/-     |

ECAT

PDI

Reset Value

Reset Value

Table 58: Register 0x0501 (PROM PDI Access)

r/(w): write access is only possible if 0x0500.0 =1 and 0x0500.1 =0.

<!-- image -->

## 6.4.10.3 EEPROM Control/Status ( 0x0502:0x0503 )

Bit

Description

| 0    | ECAT write enable ∗ 2 : 0: Write requests are disabled 1: Write requests are enabled This bit is always 1 if PDI has EEPROM control.                                                                                                                                                                                       | r/(w)   | r/-         |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------------|
| 4:1  | Reserved, write 0                                                                                                                                                                                                                                                                                                          | r/-     | r/-         |
| 5    | EEPROM emulation: 0: Normal operation (I2C interface used) 1: PDI emulates EEPROM (I2C not used)                                                                                                                                                                                                                           | r/-     | r/-         |
| 6    | Supported number of EEPROM read bytes: 0: 4 Bytes 1: 8 Bytes                                                                                                                                                                                                                                                               | r/-     | r/-         |
| 7    | Selected EEPROM Algorithm: 0: 1 address byte (1KBit ...16KBit EEPROMs) 1: 2 address bytes (32KBit ...4 MBit EEPROMs)                                                                                                                                                                                                       | r/-     | r/- r/[w]   |
| 10:8 | Command register ∗ 1 : Write: Initiate command. Read: Currently executed command Commands: 000: No command/EEPROM idle (clear error bits) 001: Read 010: Write 100: Reload Others: Reserved/invalidcommands(donotis- sue) EEPROM emulation only: after execution, PDI writes command value to indicate operation is ready. | r/(w)   | r/(w) r/[w] |
| 11   | Checksum Error at in ESC Con/uniFB01guration Area: 0: Checksum ok 1: Checksum error                                                                                                                                                                                                                                        | r/-     | r/-         |
| 12   | EEPROM loading status: 0: EEPROM loaded, device information ok 1: EEPROM not loaded, device information not available (EEPROM loading in progress or /uniFB01n- ished with a failure)                                                                                                                                      | r/-     | r/-         |
| 13   | Error Acknowledge/Command ∗ 2 : 0: No error 1: Missing EEPROM acknowledge or invalid command EEPROM emulation only: PDI writes 1 if a tem- porary failure has occurred.                                                                                                                                                    | r/-     | r/- r/[w]   |

Reset Value

<!-- image -->

ECAT

PDI

Bit

Description

ECAT

PDI

|   14 | Error Write Enable ∗ 2 : 0: No error 1: Write Command without Write enable   | r/-   | r/-   |
|------|------------------------------------------------------------------------------|-------|-------|
|   15 | Busy: 0: EEPROM Interface is idle 1: EEPROM Interface is busy                | r/-   | r/-   |

Table 59: Register 0x0502:0x0503 (PROM Cntrl)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( 0x0502.15 =1).                                                                                                                                                                                                                                               |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | r/[w]: EEPROM emulation only: write access is possible if EEPROM interface is busy ( 0x0502.15 =1). PDI acknowledges pending commands by writing a 1 into the corresponding command register bits ( 0x0502.10:8 ). Errors can beindicated by writing a 1 into the error bit 0x0502.13 . Acknowledging clears AL Event Request 0x0220.5 . |

## 6.4.10.4 EEPROM Address ( 0x0504:0x0507 )

Bit

Description

| 31:0   | EEPROM Address 0: First word (= 16 bit) 1: Second word . . . Actually used EEPROM Address bits: [9:0]: EEPROM size up to 16 kBit [17:0]: EEPROM size 32 kBit ...4 Mbit [32:0]: EEPROM Emulation   | r/(w)   | r/(w)   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|

ECAT

PDI

Table 60: Register 0x0504:0x0507 (PROM Address)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( 0x0502.15 =1).   |
|--------|----------------------------------------------------------------------------------------------|

<!-- image -->

Reset Value

Reset Value

## 6.4.10.5 EEPROM Data ( 0x0508:0x050F )

Bit

Description

ECAT

PDI

| 15:0   | EEPROM Write data (data to be written to EEP- ROM) or EEPROM Read data (data read from EEPROM,. lower bytes)   | r/(w)   | r/[w]    |
|--------|----------------------------------------------------------------------------------------------------------------|---------|----------|
| 63:16  | EEPROM Read data (data read from EEPROM, higher bytes)                                                         | r/-     | r/- r[w] |

Table 61: Register 0x0508:0x050F (PROM Data)

| Note   | (ECAT/PDI). Write access is generally blocked if EEPROM interface is busy ( 0x0502.15 =1).   |
|--------|----------------------------------------------------------------------------------------------|
| Note   | r/[w]: write access for EEPROM emulation if read or reload command is pending.               |

<!-- image -->

Reset Value

## 6.4.11 ESC Parameter RAM

## 6.4.11.1 MFC IO Block Con/uniFB01guration ( 0x0580:0x05E1 )

Byte

Description

ECAT

PDI

Table 62: Register 0x0580:0x05E1 (MFC IO Con/uniFB01g)

| Bytes 96...0   | MFC IO block con/uniFB01guration vector for - crossbar mapping and IO signal assignment - High voltage IO (HVIO) con/uniFB01guration - Switching regulator con/uniFB01guration - Memory block mapping - and MFC IO block register con/uniFB01guration   | r/w   | r/w   |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

The content of this address block in the ESC Parameter RAM can be automatically loaded from the SII EEPROM after reset/power-up as a con/uniFB01guration vector that is written to addresses 0x0580:0x05E1 in the ESC's memory space.

Nevertheless, MFC IO con/uniFB01guration data can also be written and updated online by the EtherCAT Master via the ECAT interface or from a local application controller via the PDI interface by directly accessing addresses 0x0580:0x05E1 in the ESC's memory space.

The respective data in the SII EEPROM must be of Category 1!

More information on the individual con/uniFB01guration bytes in this con/uniFB01guration vector is given in Section 7.4 - SII EEPROM MFC IO Block Parameter Map and its following sections.

<!-- image -->

Example con/uniFB01gurations are given in Section 7.10.

Reset Value

## 6.4.12 MII Management Interface

Address

Length

|               | (Byte)   |                                  |
|---------------|----------|----------------------------------|
|               |          | MII Management Interface         |
| 0x0510:0x0511 | 2        | MII Management Control/Status    |
| 0x0512        | 1        | PHY Address                      |
| 0x0513        | 1        | PHY Register Address             |
| 0x0514:0x0515 | 2        | PHY Data                         |
| 0x0516        | 1        | MII Management ECAT Access State |
| 0x0517        | 1        | MII Management PDI Access State  |
| 0x0518:0x051B | 4        | PHY Port Status                  |

Description

Table 63: MII Management Interface Register Overview

## 6.4.12.1 MII Management Control/Status ( 0x0510:0x0511 )

Bit

Description

ECAT

PDI

Reset Value

| 0     | Write enable*: 0: Write disabled 1: Write enabled This bit is always 1 if PDI has MI control.                                                                                                      | r/(w)   | r/-   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| 1     | Management Interface can be controlled by PDI (registers 0x0516:0x0517 ): 0: Only ECAT control 1: PDI control possible                                                                             | r/-     | r/-   |
| 2     | MI link detection (link con/uniFB01guration, link detec- tion, registers 0x0518:0x051B ): 0: Not available 1: MI link detection active                                                             | r/-     | r/-   |
| 7:3   | PHY address of port 0                                                                                                                                                                              | r/-     | r/-   |
| 9:8   | Command register*: Write: Initiate command. Read: Currently executed command Commands: 00: No command/MI idle (clear error bits) 01: Read 10: Write Others: Reserved/invalidcommands(donotis- sue) | r/(w)   | r/(w) |
| 12:10 | Reserved, write 0                                                                                                                                                                                  | r/-     | r/-   |

<!-- image -->

Bit

## Note

* Write enable bit 0 is self-clearing at the SOF of the next frame (or at the end of the PDI access), Command bits [9:8] are self-clearing after the command is executed (Busy ends). Writing "'00"' to the command register will also clear the error bits [14:13]. The Command bits are cleared after the command is executed.

ECAT

PDI

Table 64: Register 0x0510:0x0511 (MI Cntrl/State)

|   13 | Read error: 0: No read error 1: Read error occurred (PHY or register not available) Cleared by writing to this register.                                                                   | r/(w)   | r/(w)   |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
|   14 | Command error: 0: Last Command was successful 1: Invalid command or write command with- out Write Enable Cleared with a valid command or by writing "'00"' to Command register bits [9:8]. | r/-     | r/-     |
|   15 | Busy: 0: MI control state machine is idle 1: MI control state machine is active                                                                                                            | r/-     | r/-     |

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( 0x0510.15 =1).

## 6.4.12.2 PHY Address ( 0x0512 )

Bit

Description

Note

| 0:4   | PHY Address                                                                                                                                                                                                           | r/(w)   | r/(w)   |     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-----|
|       | Reserved, write 0                                                                                                                                                                                                     | r/-     | r/-     | 6:5 |
| 7     | Show con/uniFB01gured PHY address of port 0-3 in register 0x0510.7:3 . Select port x with bits [4:0] of this register (valid values are 0-3): 0: Show address of port 0 (offset) 1: Show individual address of port x | r/(w)   | r/(w)   |     |

ECAT

PDI

Table 65: Register 0x0512 (PHY Address)

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( 0x0510.15 =1).

<!-- image -->

Description

Reset Value

Reset Value

## 6.4.12.3 PHY Register Address ( 0x0513 )

Bit

Note

Description

ECAT

PDI

Table 66: Register 0x0513 (PHY Register Address)

| 4:0   | Address of PHYRegister that shall beread/writ- ten   | r/(w)   | r/(w)   |
|-------|------------------------------------------------------|---------|---------|
| 7:5   | Reserved, write 0                                    | r/(w)   | r/(w)   |

r/ (w): write access depends on assignment of MI (ECAT/PDI). Write access is generally blocked if Management interface is busy ( 0x0510.15 =1).

## 6.4.12.4 PHY Data ( 0x0514:0x0515 )

Bit

Note

Description

ECAT

PDI

Table 67: Register 0x0514:0x0515 (PHY Data)

| 15:0   | PHY Read/Write Data   | r/(w)   | r/(w)   |
|--------|-----------------------|---------|---------|

r/ (w): write access depends on assignment of MI (ECAT/PDI). Access is generally blocked if Management interface is busy ( 0x0510.15 =1).

## 6.4.12.5 MII Management ECAT Access State ( 0x0516 )

Bit

Description

| 31:0   | Access to MII management: 0: ECAT enables PDI takeover of MII manage- ment control 1: ECAT claims exclusive access to MII manage- ment   | r/(w)   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| 31:0   | Reserved, write 0                                                                                                                        | r/-     | r/-   |

ECAT

PDI

Table 68: Register 0x0516 (MI ECAT State)

r/ (w): write access is only possible if 0x0517.0 =0.

| Note   | 0x0517.0   |
|--------|------------|

<!-- image -->

Reset Value

Reset Value

Reset Value

## 6.4.12.6 MII Management PDI Access State ( 0x0517 )

Bit

Description

| 0   | Access to MII management: 0: ECAT has access to MII management 1: PDI has access to MII management   | r/-   | r/(w)   |
|-----|------------------------------------------------------------------------------------------------------|-------|---------|
| 1   | Force PDI Access State: 0: Do not change Bit 0x0517.0 1: Reset Bit 0x0517.0 to 0                     | r/w   | r/-     |
| 7:2 | Reserved, write 0                                                                                    | r/-   | r/-     |

ECAT

PDI

Table 69: Register 0x0517 (MI PDI State)

## 6.4.12.7 PHY Port Status ( 0x0518:0x051B )

Bit

Note

Description

| 0    | Physical link status (PHY status register 1.2): 0: No physical link / 1: Physical link detected                                                                     | r/-        | r/-        |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| 1    | Link status (100 Mbit/s, Full Duplex, Autonego- tiation): 0: No link / 1: Link detected                                                                             | r/-        | r/-        |
| 2    | Link status error: 0: No error 1: Link error, link inhibited                                                                                                        | r/-        | r/-        |
| 3    | Read error: 0: No read error occurred 1: A read error has occurred Cleared by writing any value to at least one of the PHY Status Port registers.                   | r/ (w/clr) | r/ (w/clr) |
| 4    | Link partner error: 0: No error detected / 1: Link partner error                                                                                                    | r/-        | r/-        |
| 5    | PHY con/uniFB01guration updated: 0: No update 1: PHY con/uniFB01guration was updated Cleared by writing any value to at least one of the PHY Status Port registers. | r/ (w/clr) | r/ (w/clr) |
| 31:0 | Reserved                                                                                                                                                            | r/-        | r/-        |

ECAT

PDI

Reset Value

Reset Value

Table 70: Register 0x0518+y (PHY Port Status)

r/(w): write access depends on assignment of MI (ECAT/PDI).

<!-- image -->

## 6.4.13 FMMUs

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0600:0x06FF | 16x16    | FMMU[15:0]             |
| +0x0:0x3      | 4        | Logical Start Address  |
| +0x4:0x5      | 2        | Length                 |
| +0x6          | 1        | Logical Start bit      |
| +0x7          | 1        | Logical Stop bit       |
| +0x8:0x9      | 2        | Physical Start Address |
| +0xA          | 1        | Physical Start bit     |
| +0xB          | 1        | Type                   |
| +0xC          | 1        | Activate               |
| +0xD:0xF      | 3        | Reserved               |

Length

Description

Table 71: FMMU Register Overview

For the following registers use y as FMMU number.

See the device features on how many FMMUs are supported in a speci/uniFB01c ESC device.

## 6.4.13.1 Logical Start Address ( +0x0:0x3 )

Bit

Description

| 31:0   | Logical start address within the EtherCAT Ad- dress Space.   | r/w   | r/-   |
|--------|--------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 72: Register 0x06y0:0x06y3 (Log Start Addr)

## 6.4.13.2 Length ( +0x4:0x5 )

Bit

Description

| 15:0   | Offset from the /uniFB01rst logical FMMU Byte to the last FMMU Byte + 1 (e.g., if two bytes are used then this parameter shall contain 2)   | r/w   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 73: Register 0x06y4:0x06y5 (FMMU Length)

Reset Value

Reset Value

<!-- image -->

## 6.4.13.3 Logical Start bit ( +0x6 )

Bit

Description

ECAT

PDI

Table 74: Register 0x06y6 (Log. Start Bit)

| 2:0   | Logical starting bit that shall be mapped (bits are counted from least signi/uniFB01cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|---------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:3   | Reserved, write 0                                                                                                                     | r/-   | r/-   |

## 6.4.13.4 Logical Stop bit ( +0x7 )

Bit

Description

ECAT

PDI

Table 75: Register 0x06y7 (Log. Stop Bit))

| 2:0   | Last logical bit that shall be mapped (bits are counted from least signi/uniFB01cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:3   | Reserved, write 0                                                                                                                 | r/-   | r/-   |

## 6.4.13.5 Physical Start Address ( +0x8:0x9 )

Bit

Description

| Physical Start Address (mapped to logical Start address)   | r/w   | r/-   |
|------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 76: Register 0x06y8:0x06y9 (Phy. Start Addr

## 6.4.13.6 Physical Start bit ( +0xA )

Bit

Description

ECAT

PDI

Table 77: Register 0x06yA (Phy. Start Bit)

| 2:0   | Physical starting bit as target of logical start bit mapping (bits are counted from least signi/uniFB01- cant bit (=0) to most signi/uniFB01cant bit(=7)   | r/w   | r/-   |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:3   | Reserved, write 0                                                                                                                                          | r/-   | r/-   |

Reset Value

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.13.7 Type ( +0xB )

Bit

Description

## 6.4.13.8 Activate ( +0xC )

Bit

Description

## 6.4.13.9 Reserved ( +0xD:0xF )

Bit

Description

ECAT

PDI

Table 78: Register 0x06yB (FMMU Type)

| 0   | 0: Ignore mapping for read accesses 1: Use mapping for read accesses   | r/w   | r/-   |
|-----|------------------------------------------------------------------------|-------|-------|
| 1   | 0: Ignore mapping for write accesses 1: Use mapping for write accesses | r/w   | r/-   |
| 7:2 | Reserved, write 0                                                      | r/-   | r/-   |

ECAT

PDI

Table 79: Register 0x06yC (FMMU Activate)

| 0   | 0: FMMU deactivated 1: FMMU activated. FMMU checks logical ad- dressed blocks to be mapped according to mapping con/uniFB01gured   | r/w   | r/-   |
|-----|------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 7:1 | Reserved, write 0                                                                                                                  | r/-   | r/-   |

ECAT

PDI

Table 80: Register 0x06yD:0x06yF (Reserved)

| 23:0   | Reserved, write 0   | r/-   | r/-   |
|--------|---------------------|-------|-------|

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.14 SyncManagers

Address

|               | (Byte)   |                        |
|---------------|----------|------------------------|
| 0x0800:0x087F | 16x8     | SyncManager[15:0]      |
| +0x0:0x1      | 2        | Physical Start Address |
| +0x2:0x3      | 2        | Length                 |
| +0x4          | 1        | Control Register       |
| +0x5          | 1        | Status Register        |
| +0x6          | 1        | Activate               |
| +0x7          | 1        | PDI Control            |

Length

Description

Table 81: SyncManager Register Overview

For the following registers use y as SM number.

See the device features on how many SMs are supported in a speci/uniFB01c ESC device.

## 6.4.14.1 Physical Start Address ( +0x0:0x1 )

Bit

## Note

ECAT

PDI

Reset Value

Table 82: Register 0x0800+y*8:0x0801+y*8 (Phy. Start Addr)

| 15:0   | Speci/uniFB01es /uniFB01rst byte that will be handled by Sync- Manager   | r/(w)   | r/-   |
|--------|--------------------------------------------------------------------------|---------|-------|

r/(w): Register can only be written if SyncManager is disabled (+ 0x6.0 = 0).

## 6.4.14.2 Length ( +0x2:0x3 )

Bit

## Note

Description

ECAT

PDI

Reset Value

Table 83: Register 0x0802+y*8:0x0803+y*8 (SM Length)

| 15:0   | Number of bytes assigned to SyncManager (shall be greater 1, otherwise SyncManager is not activated. If set to 1, only WatchdogTrigger is generated if con/uniFB01gured)   | r/(w)   | r/-   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-------|

r/(w): Register can only be written if SyncManager is disabled ( +0x6.0 = 0).

<!-- image -->

Description

## 6.4.14.3 Control Register ( +0x4 )

Bit

## Note

Description

ECAT

PDI

Table 84: Register 0x0804+y*8 (SM Control)

| 1:0   | Operation Mode: 00: Buffered (3 buffer mode) 01: Reserved 10: Mailbox (Single buffer mode) 11: Reserved                           | r/(w)   | r/-   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------|---------|-------|
| 3:2   | Direction: 00: Read: ECAT read access, PDI write access. 01: Write: ECAT write access, PDI read access. 10: Reserved 11: Reserved | r/(w)   | r/-   |
| 4     | Interrupt in ECAT Event Request Register: 0: Disabled 1: Enabled                                                                  | r/(w)   | r/-   |
| 5     | Interrupt in PDI Event Request Register: 0: Disabled 1: Enabled                                                                   | r/(w)   | r/-   |
| 6     | Watchdog Trigger Enable: 0: Disabled 1: Enabled                                                                                   | r/w     | r/-   |
| 7     | Reserved, write 0                                                                                                                 | r/-     | r/-   |

r/(w): Register can only be written if SyncManager is disabled ( +0x6.0 = 0).

## 6.4.14.4 Status Register ( +0x5 )

Bit

Description

|   0 | Interrupt Write: 1: Interrupt after buffer was completely and successfully written 0: Interrupt cleared after /uniFB01rst byte of buffer was read NOTE: This interrupt is signaled to the reading side if enabled in the SM Control register.   | r/-   | r/-   |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|   1 | Interrupt Read: 1: Interrupt after buffer was completely and successful read 0: Interrupt cleared after /uniFB01rst byte of buffer was written NOTE: This interrupt is signaled to the writing side if enabled in the SM Control register.      | r/-   | r/-   |

Reset Value

<!-- image -->

ECAT

PDI

Reset Value

Bit

Description

## 6.4.14.5 Activate ( +0x6 )

Bit

Description

| 0   | SyncManager Enable/Disable: 0: Disable: Access to Memory without Sync- Manager control 1: Enable: SyncManager is active and controls Memory area set in con/uniFB01guration   | r/w   | r/ (w ack)*   |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------|
| 1   | Repeat Request: A toggle of Repeat Request means that a mail- box retry is needed (primarily used in conjunc- tion with ECAT Read Mailbox)                                    | r/w   | r/-           |
| 5:2 | Reserved, write 0                                                                                                                                                             | r/-   | r/ (w ack)*   |
| 6   | Latch Event ECAT: 0: No 1: Generate Latch event if EtherCAT master is- sues a buffer exchange                                                                                 | r/w   | r/ (w ack)*   |
| 7   | Latch Event PDI: 0: No 1: Generate Latch events if PDI issues a buffer exchange or if PDI accesses buffer start address                                                       | r/w   | r/ (w ack)*   |

ECAT

PDI

Table 85: Register 0x0805+y*8 (SM Status)

| 2   | Reserved                                                                                                                                     | r/-   | r/-   |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 3   | Mailbox mode: mailbox status: 0: Mailbox empty 1: Mailbox full Buffered mode: reserved                                                       | r/-   | r/-   |
| 5:4 | Buffered mode: buffer status (last written buffer): 00: 1. buffer 01: 2. buffer 10: 3. buffer 11: (no buffer written) Mailbox mode: reserved | r/-   | r/-   |
| 6   | Read buffer in use (opened)                                                                                                                  | r/-   | r/-   |
| 7   | Write buffer in use (opened)                                                                                                                 | r/-   | r/-   |

ECAT

PDI

Table 86: Register 0x0806+y*8 (SM Activate)

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI in all SMs which have changed activation clears AL Event Request 0x0220.4 . Writing to this register from PDI is

<!-- image -->

Reset Value

Reset Value

not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI in all SMs which have changed activation clears AL Event Request 0x0220.4 . Writing to this register from PDI is possible; write value is ignored (write 0).

## 6.4.14.6 PDI Control ( +0x7 )

Bit

Description

| 0   | Deactivate SyncManager: Read: 0: Normal operation, SyncManager activated. 1: SyncManager deactivated and reset Sync- Manager locks access to Memory area. Write: 0: Activate SyncManager 1: Request SyncManager deactivation NOTE: Writing 1 is delayed until the end of a frame which is currently processed.   | r/-   | r/w   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 1   | Repeat Ack: If this is set to the same value as set by Repeat Request, the PDI acknowledges the execution of a previous set Repeat request.                                                                                                                                                                      | r/-   | r/w   |
| 7:2 | Reserved, write 0                                                                                                                                                                                                                                                                                                | r/-   | r/-   |

ECAT

PDI

Table 87: Register 0x0807+y*8 (SM PDI Control)

Reset Value

<!-- image -->

## 6.4.15 Distributed Clocks Receive Times

Depending on the available width of the Distributed Clocks feature the time stamp registers are either 32 bit (4 bytes) or 64 bits (8 bytes) wide. Please check the feature summary of the respective TRINAMIC ESC device.

## 6.4.15.1 Receive Time Port 0 ( 0x0900:0x0903 )

Bit

Note

ECAT

PDI

Table 88: Register 0x0900:0x0903 (Rcv Time P0)

| 31:0   | Write: A write access to register 0x0900 with BWR or FPWRlatches the local time of the beginning of the receive frame (start /uniFB01rst bit of preamble) at each port. Read: Local time of the beginning of the last receive framecontaining awrite access to this register.   | r/w (special func- tion)   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|-------|

The time stamps cannot be read in the same frame in which this register was written.

## 6.4.15.2 Receive Time Port 1 ( 0x0904:0x0907 )

Bit

Description

| 31:0   | Local time of the beginning of a frame (start /uniFB01rst bit of preamble) received at port 1 contain- ing a BWR or FPWR to Register 0x0900 .   | r/-   | r/-   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 89: Register 0x0904:0x0907 (Rcv Time P1)

Description

Reset Value

Reset Value

<!-- image -->

## 6.4.16 Distributed Clocks Time Loop Control Unit

Time Loop Control unit is usually assigned to ECAT. Write access to Time Loop Control registers by PDI (and not ECAT) depends on explicit hardware con/uniFB01guration and on the used ESC type. Check the device features for availability.

## 6.4.16.1 System Time ( 0x0910:0x0917 )

Bit

Description

ECAT

PDI

Table 90: Register 0x0910:0x0917 (System Time)

| 0:63   | ECAT read access: Local copy of System Time whenframe passed the reference clock (i.e., in- cluding System Time Delay). Time latched at beginning of the frame (Ethernet SOF delim- iter)                                                                                                                          | r                          | -                          |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|----------------------------|
| 63:0   | PDIreadaccess: LocalcopyoftheSystemTime. Time latched when reading /uniFB01rst byte ( 0x0910 )                                                                                                                                                                                                                     | -                          | r                          |
| 31:0   | Write access: Written value will be compared with the local copy of the System time. The re- sult is an input to the time control loop. NOTE: written value will be compared at the end of the frame with the latched (SOF) local copy of the System time if at least the /uniFB01rst byte ( 0x0910 ) was written. | (w) (spe- cial func- tion) | r/-                        |
| 31:0   | Write access: Written value will be compared with Latch0 Time Positive Edge time. The re- sult is an input to the time control loop. NOTE: written value will be compared at the end of the access with Latch0 Time Positive Edge ( 0x09B0:0x09B3 ) if at least the last byte ( 0x0913 ) was written.              | -                          | (w) (spe- cial func- tion) |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

| Note   | only with explicit ESC con/uniFB01guration: System Time PDI controlled).   |
|--------|----------------------------------------------------------------------------|

## 6.4.16.2 Receive Time ECAT Processing Unit ( 0x0918:0x091F )

Bit

Description

ECAT

| 63:0   | Local time of the beginning of a frame (start /uniFB01rst bit of preamble) received at the ECAT Pro- cessing Unit containing a write access to Regis- ter 0x0900 NOTE: E.g., if port 0 is open, this register re- /uniFB02ects the Receive Time Port 0 as a 64 Bit value.   | r/-   | r/-   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

Reset Value

<!-- image -->

PDI

Reset Value

Bit

Description

ECAT

PDI

Table 91: Register 0x0918:0x091F (Rcv Time EPU)

## 6.4.16.3 System Time Offset ( 0x0920:0x0927 )

Bit

Note

ECAT

PDI

Table 92: Register 0x0920:0x0927 (Sys Time Offset)

| 63:0   | Difference between local time and System Time. Offset is added to the local time.   | r/(w)   | r/(w)   |
|--------|-------------------------------------------------------------------------------------|---------|---------|

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled). Reset internal system time difference /uniFB01lter and speed counter /uniFB01lter by writing Speed Counter Start ( 0x0930:0x0931 ) after changing this value.

## 6.4.16.4 System Time Delay ( 0x0928:0x092B )

Bit

Note

ECAT

PDI

Table 93: Register 0x0928:0x092B (Sys Time Delay)

| 31:0   | Delay between Reference Clock and the ESC   | r/(w)   | r/(w)   |
|--------|---------------------------------------------|---------|---------|

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled). Reset internal system time difference /uniFB01lter and speed counter /uniFB01lter by writing Speed Counter Start ( 0x0930:0x0931 ) after changing this value.

## 6.4.16.5 System Time Difference ( 0x092C:0x092F )

Bit

Description

|   30:0 | Meandifference between local copy of System Time and received System Time values                                                         | r/-   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|     31 | 0: Local copy of System Time greater than or equal received System Time 1: Local copy of System Time smaller than re- ceived System Time | r/-   | r/-   |

ECAT

PDI

Table 94: Register 0x092C:0x092F (Sys Time Diff)

Description

Description

Reset Value

Reset Value

Reset Value

Reset Value

<!-- image -->

## 6.4.16.6 Speed Counter Start ( 0x0930:0x0931 )

Bit

Note

ECAT

PDI

Table 95: Register 0x0930:0x931 (Speed Cnt Start)

|   14:0 | Bandwidth for adjustment of local copy of Sys- tem Time (larger values → smaller bandwidth and smoother adjustment) A write access resets System Time Differ- ence ( 0x092C:0x092F ) and Speed Counter Diff ( 0x0932:0x0933 ). Minimum value: 0x0080 to 0x3FFF   | r/(w)   | r/(w)   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
|     15 | Reserved, write 0                                                                                                                                                                                                                                                | r/(w)   | r/-     |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

## 6.4.16.7 Speed Counter Diff ( 0x0932:0x0933 )

Bit

Description

| 15:0   | Representation of the deviation between local clock period and reference clock's clock period (representation: two's complement) Range: ± (Speed Counter Start - 0x7F )   | r/-   | r/-   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 96: Register 0x0932:0x0933 (Speed Cnt Diff)

Calculate the clock deviation after System Time Difference has settled at a low value as follows:

Note

Deviation = 5 ∗ ( SpeedCntStart + SpeedCntDiff +2) ∗ ( SpeedCntStart - SpeedCntDiff +2)

SpeedCntDiff

<!-- image -->

Description

Reset Value

Reset Value

## 6.4.16.8 System Time Difference Filter Depth ( 0x0934 )

Bit

## Note

ECAT

PDI

Table 97: Register 0x0934 (Sys Time Diff Filter)

| 3:0   | Filter depth for averaging the received System Time deviation. A write access resets System Time Difference ( 0x092C:0x092F )   | r/(w)   | r/(w)   |
|-------|---------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| 7:4   | Reserved, write 0                                                                                                               | r/-     | r/-     |

Write access to this register depends upon ESC con/uniFB01guration (typically ECAT, PDI only with explicit ESC con/uniFB01guration: System Time PDI controlled).

## 6.4.16.9 Speed Counter Filter Depth ( 0x0935 )

Bit

Description

| 3:0   | Filter depth for averaging the clock period devi- ation. A write access resets the internal speed counter /uniFB01lter.   | r/(w)   | r/(w)   |
|-------|---------------------------------------------------------------------------------------------------------------------------|---------|---------|
| 7:4   | Reserved, write 0                                                                                                         | r/-     | r/-     |

ECAT

PDI

Table 98: Register 0x0935 (Speed Cnt Filter Depth)

Description

Reset Value

Reset Value

<!-- image -->

## 6.4.17 Distributed Clocks Cyclic Unit Control

## 6.4.17.1 Cyclic Unit Control ( 0x0980 )

Bit

Description

| 0   | SYNC out unit control: 0: ECAT controlled 1: PDI controlled                                                                                                                             | r/w   | r/-   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 3:1 | Reserved, write 0                                                                                                                                                                       | r/-   | r/-   |
| 4   | Latch In unit 0: 0: ECAT controlled 1: PDI controlled NOTE: Always 1 (PDI controlled) if System Time is PDI controlled. Latch interrupt is routed to ECAT/PDI depending on this setting | r/w   | r/-   |
| 5   | Latch In unit 1: 0: ECAT controlled 1: PDI controlled NOTE: Latch interrupt is routed to ECAT/PDI depending on this setting                                                             | r/w   | r/-   |
| 7:6 | Reserved, write 0                                                                                                                                                                       | r/-   | r/-   |

ECAT

PDI

Table 99: Register 0x0980 (Cyclic Unit Cntrl)

Reset Value

<!-- image -->

## 6.4.18 Distributed Clocks SYNC Out Unit

## 6.4.18.1 SYNC Out Activation ( 0x0981 )

Bit

Note

Description

|   0 | Sync Out Unit activation: 0: Deactivated 1: Activated                                                                                                                                    | r/(w)   | r/(w)   |   0 |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-----|
|   1 | SYNC0 generation: 0: Deactivated 1: SYNC0 pulse is generated                                                                                                                             | r/(w)   | r/(w)   |   0 |
|   2 | SYNC1 generation: 0: Deactivated 1: SYNC1 pulse is generated                                                                                                                             | r/(w)   | r/(w)   |   0 |
|   3 | Auto-activation by writing Start Time Cyclic Op- eration (0x0990:0x0997): 0: Disabled 1: Auto-activation enabled. 0x0981.0 is set au- tomatically after Start Time is written.           | r/(w)   | r/(w)   |   0 |
|   4 | Extension of Start Time Cyclic Operation ( 0x0990:0x0993 ): 0: No extension 1: Extend 32 bit written Start Time to 64 bit                                                                | r/(w)   | r/(w)   |   0 |
|   5 | Start Time plausibility check: 0: Disabled. SyncSignal generation if Start Time is reached. 1: Immediate SyncSignal generation if Start Time is outside near future (see 0x0981.6 )      | r/(w)   | r/(w)   |   0 |
|   6 | Near future con/uniFB01guration (approx.): 0: 1 / 2 DC width future ( 2 31 ns or 2 63 ns) 1: 2.1 sec. future ( 2 31 ns)                                                                  | r/(w)   | r/(w)   |   0 |
|   7 | SyncSignal debug pulse (Vasily bit): 0: Deactivated 1: Immediately generate one ping only on SYNC0-1 according to 0x0981.(2:1) for debug- ging This bit is self-clearing, always read 0. | r/(w)   | r/(w)   |   0 |

ECAT

PDI

Reset Value

Table 100: Register 0x0981 (SYNC Out Activation)

Write to this register depends upon setting of 0x0980.0 .

<!-- image -->

## 6.4.18.2 Pulse Length of SYNC signals ( 0x0982:0x0983 )

Bit

Description

| 0   | Pulse length of SyncSignals (in Units of 10ns) 0: Acknowledge mode: SyncSignal will be cleared by reading SYNC[1:0] Status register   | r/-   | r/-   | 0, later EEPROM ADR 0x0002   |
|-----|---------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------------|

ECAT

PDI

Reset Value

Table 101: Register 0x0982:0x0983 (SYNC Pulse Length)

## 6.4.18.3 Activation Status ( 0x0984 )

Bit

Description

ECAT

PDI

Table 102: Register 0x0984 (Activation Status)

| 0   | SYNC0 activation state: 0: First SYNC0 pulse is not pending 1: First SYNC0 pulse is pending                                                                                                      | r/-   | r/-   |   0 |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| 1   | SYNC1 activation state: 0: First SYNC1 pulse is not pending 1: First SYNC1 pulse is pending                                                                                                      | r/-   | r/-   |   0 |
| 2   | Start Time Cyclic Operation ( 0x0990:0x0997 ) plausibility check result when Sync Out Unit was activated: 0: Start Time was within near future 1: Start Time was out of near future ( 0x0981.6 ) | r/-   | r/-   |   0 |
| 7:3 | Reserved                                                                                                                                                                                         | r/-   | r/-   |   0 |

## 6.4.18.4 SYNC0 Status ( 0x098E )

Bit

Description

ECAT

PDI

Table 103: Register 0x098E (SYNC0 Status)

| 0   | SYNC0 activation state: 0: First SYNC0 pulse is not pending 1: First SYNC0 pulse is pending   | r/-   | r/ (w ack)*   |   0 |
|-----|-----------------------------------------------------------------------------------------------|-------|---------------|-----|
| 7:1 | Reserved                                                                                      | r/-   | r/ (w ack)*   |   0 |

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears

AL Event Request 0x0220.2 . Writing to this register from PDI is not possible. PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request 0x0220.2 . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Reset Value

Reset Value

## 6.4.18.5 SYNC1 Status ( 0x098F )

Bit

Description

ECAT

PDI

Table 104: Register 0x098F (SYNC1 Status)

| 0   | SYNC1 activation state: 0: First SYNC1 pulse is not pending 1: First SYNC1 pulse is pending   | r/-   | r/ (w ack)*   |   0 |
|-----|-----------------------------------------------------------------------------------------------|-------|---------------|-----|
| 7:1 | Reserved                                                                                      | r/-   | r/ (w ack)*   |   0 |

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI clears AL Event Request 0x0220.3 . Writing to this register from PDI is not possible.

PDI register function acknowledge by Write command is enabled: Writing this register from PDI clears AL Event Request 0x0220.3 . Writing to this register from PDI is possible; write value is ignored (write 0).

## 6.4.18.6 Start Time Cyclic Operation / Next SYNC0 Pulse ( 0x0990:0x0997 )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 105: Register 0x0990:0x0997 (Start Time Cyclic Operation)

| 63:0   | Write: Start time (System time) of cyclic opera- tion in ns Read: System time of next SYNC0 pulse in ns   | r/(w)   | r/(w)   | 0   |
|--------|-----------------------------------------------------------------------------------------------------------|---------|---------|-----|

Write to this register depends upon setting of 0x0980.0 . Only writable if 0x0981.0 =0. Auto-activation ( 0x0981.3 =1): upper 32 bits are automatically extended if only lower 32 bits are written within one frame.

## 6.4.18.7 Next SYNC1 Pulse ( 0x0998:0x099F )

Bit

Description

| 63:0   | System time of next SYNC1 pulse in ns   | r/-   | r/-   | 0   |
|--------|-----------------------------------------|-------|-------|-----|

ECAT

PDI

Table 106: Register 0x0998:0x099F (Next SYNC1)

Reset Value

Reset Value

<!-- image -->

## 6.4.18.8 SYNC0 Cycle Time ( 0x09A0:0x09A3 )

Bit

## Note

ECAT

PDI

Reset Value

Table 107: Register 0x09A0:0x09A3 (SYNC0 Cycle Time)

| 31:0   | WTime between two consecutive SYNC0 pulses in ns. 0: Single shot mode, generate only one SYNC0 pulse.   | r/(w)   | r/(w)   | 0   |
|--------|---------------------------------------------------------------------------------------------------------|---------|---------|-----|

Write to this register depends upon setting of 0x0980.0 .

## 6.4.18.9 SYNC1 Cycle Time ( 0x09A4:0x09A7 )

Bit

Note

Description

| 31:0   | Time between SYNC1 pulses and SYNC0 pulse in ns   | r/(w)   | r/(w)   | 0   |
|--------|---------------------------------------------------|---------|---------|-----|

ECAT

PDI

Reset Value

Table 108: Register 0x09A4:0x09A7 (SYNC1 Cycle Time)

Write to this register depends upon setting of 0x0980.0 .

Description

<!-- image -->

## 6.4.19 Distributed Clocks LATCH In Unit

## 6.4.19.1 Latch0 Control ( 0x09A8 )

Bit

Note

ECAT

PDI

Table 109: Register 0x09A8 (Latch0 Control)

| 0   | Latch0 positive edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
|-----|----------------------------------------------------------------------------------------------------|---------|---------|-----|
| 1   | Latch0 negative edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
| 7:2 | Reserved, write 0                                                                                  | r/-     | r/-     |   0 |

Write access depends upon setting of 0x0980.4 .

## 6.4.19.2 Latch1 Control ( 0x09A9 )

Bit

Note

Description

ECAT

PDI

Table 110: Register 0x09A9 (Latch1 Control)

| 0   | Latch1 positive edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)   | r/(w)   | r/(w)   |   0 |
|-----|----------------------------------------------------------------------------------------------------|---------|---------|-----|
| 1   | Latch01 negative edge: 0: Continuous Latch active 1: Single event (only /uniFB01rst event active)  | r/(w)   | r/(w)   |   0 |
| 7:2 | Reserved, write 0                                                                                  | r/-     | r/-     |   0 |

Write access depends upon setting of 0x0980.5 .

Description

Reset Value

Reset Value

<!-- image -->

## 6.4.19.3 Latch0 Status ( 0x09AE )

Bit

Description

ECAT

PDI

Table 111: Register 0x09AE (Latch0 Status)

| 0   | Event Latch0 positive edge. 0: Positive edge not detected or continuous mode 1: Positive edge detected in single event mode only. Flag cleared by reading out Latch0 Time Posi- tive Edge.   | r/-   | r/-   |   0 |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| 1   | Event Latch0 negative edge. 0: Negative edge not detected or continuous mode 1: Negative edge detected in single event mode only. Flag cleared by reading out Latch0 Time Nega- tive Edge.   | r/-   | r/-   |   0 |
| 2   | Latch0 pin state                                                                                                                                                                             | r/-   | r/-   |   0 |
| 7:3 | Reserved                                                                                                                                                                                     | r/-   | r/-   |   0 |

## 6.4.19.4 Latch1 Status ( 0x09AF )

Bit

Description

ECAT

PDI

Table 112: Register 0x09AF (Latch1 Status)

| 0   | Event Latch1 positive edge. 0: Positive edge not detected or continuous mode 1: Positive edge detected in single event mode only. Flag cleared by reading out Latch1 Time Posi- tive Edge.   | r/-   | r/-   |   0 |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----|
| 1   | Event Latch1 negative edge. 0: Negative edge not detected or continuous mode 1: Negative edge detected in single event mode only. Flag cleared by reading out Latch1 Time Nega- tive Edge.   | r/-   | r/-   |   0 |
| 2   | Latch1 pin state                                                                                                                                                                             | r/-   | r/-   |   0 |
| 7:3 | Reserved                                                                                                                                                                                     | r/-   | r/-   |   0 |

Reset Value

Reset Value

<!-- image -->

## 6.4.19.5 Latch0 Time Positive Edge ( 0x09B0:0x09B7 )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

Table 113: Register 0x09B0:0x09B7 (Latch0 Time Pos Edge)

| 63:0   | Register captures System time at the positive edge of the Latch0 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch0 Status 0x09AE.0 if 0x0980.4 =0. Writing to this register from ECAT is not possible.

0x0980.4 =1 clears Latch0 Status 0x09AE.0 . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if 0x0980.4 =1 clears Latch0 Status 0x09AE.0 . Writing to this register from PDI is possible; write value is ignored (write 0).

## 6.4.19.6 Latch0 Time Negative Edge ( 0x09B8:0x09BF )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

Table 114: Register 0x09B8:0x09BF (Latch0 Time Neg Edge)

| 63:0   | Register captures System time at the negative edge of the Latch0 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch0 Status 0x09AE.1 if 0x0980.4 =0. Writing to this register from ECAT is not possible.

0x0980.4 =1 clears Latch0 Status 0x09AE.1 . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if 0x0980.4 =1 clears Latch0 Status 0x09AE.1 . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Description

Description

## 6.4.19.7 Latch1 Time Positive Edge ( 0x09C0:0x09C7 )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

Table 115: Register 0x09C0:0x09C7 (Latch1 Time Pos Edge)

| 63:0   | Register captures System time at the positive edge of the Latch1 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch1 Status 0x09AF.0 if 0x0980.5 =0. Writing to this register from ECAT is not possible.

0x0980.5 =1 clears Latch1 Status 0x09AF.0 . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if 0x0980.5 =1 clears Latch1 Status 0x09AF.0 . Writing to this register from PDI is possible; write value is ignored (write 0).

## 6.4.19.8 Latch1 Time Negative Edge ( 0x09C8:0x09CF )

Bit

## Note

* PDI register function acknowledge by Write command is disabled: Reading this register from PDI if

ECAT

PDI

Reset Value

Table 116: Register 0x09C8:0x09CF (Latch1 Time Neg Edge)

| 63:0   | Register captures System time at the negative edge of the Latch1 signal.   | r(ack)/-   | r/ (w ack)*   | 0   |
|--------|----------------------------------------------------------------------------|------------|---------------|-----|

Register bits [63:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value. Reading this register from ECAT clears Latch1 Status 0x09AF.0 if 0x0980.5 =0. Writing to this register from ECAT is not possible.

0x0980.5 =1 clears Latch1 Status 0x09AF.1 . Writing to this register from PDI is not possible. PDIregister function acknowledge by Write command is enabled: Writing this register from PDI if 0x0980.5 =1 clears Latch1 Status 0x09AF.1 . Writing to this register from PDI is possible; write value is ignored (write 0).

<!-- image -->

Description

Description

## 6.4.20 Distributed Clocks SyncManager Event Times

## 6.4.20.1 EtherCAT Buffer Change Event Time ( 0x09F0:0x09F3 )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 117: Register 0x09F0:0x09F3 (ECAT Buffer Change Event Time)

| 31:0   | Register captures local time of the beginning of the frame which causes at least one SM to assert an ECAT event   | r/-   | r/-   | 0   |
|--------|-------------------------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

## 6.4.20.2 PDI Buffer Start Event Time ( 0x09F8:0x09FB )

Bit

Note

Description

ECAT

PDI

Reset Value

Table 118: Register 0x09F8:0x09FB (PDI Buffer Start Event Time)

| 31:0   | Register captures local time when at least one SyncManager asserts an PDI buffer start event   | r/-   | r/-   | 0   |
|--------|------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

## 6.4.20.3 PDI Buffer Change Event Time ( 0x09FC:0x09FF )

Bit

Description

ECAT

PDI

Reset Value

Table 119: Register 0x09FC:0x09FF (PDI Buffer Change Event Time)

| 31:0   | Register captures local time when at least one SyncManager asserts an PDI buffer start event   | r/-   | r/-   | 0   |
|--------|------------------------------------------------------------------------------------------------|-------|-------|-----|

Register bits [31:8] are internally latched (ECAT/PDI independently) when bits [7:0] are read, which guarantees reading a consistent value.

| Note   | [7:0] are read, which guarantees reading a consistent value.   |
|--------|----------------------------------------------------------------|

<!-- image -->

## 6.4.21 ESC Speci/uniFB01c

## 6.4.21.1 Product ID ( 0x0E00:0x0E07 )

Bit

Description

| 63:0   | Product ID   | r/-   | r/-   | TMC8460: 0x0000000001008460 TMC8461: 0x0000000001108461 TMC8462: 0x0000000001108461 TMC8670: 0x0000000001008670   |
|--------|--------------|-------|-------|-------------------------------------------------------------------------------------------------------------------|

ECAT

PDI

Reset Value

Table 120: Register 0x0E00:0x0E07 (Product ID)

## 6.4.21.2 Vendor ID ( 0x0E08:0x0E0F )

Bit

Description

ECAT

PDI

Reset Value

| 63:0   | Vendor ID: [23:0] Company [31:24] Department NOTE: Test Vendor IDs [31:28]= 0xE   | r/-   | r/-   | TMC8460: 0x0000000100000286 TMC8461: 0x0000000100000286 TMC8462: 0x0000000100000286 TMC8670: 0x0000000100000286   |
|--------|-----------------------------------------------------------------------------------|-------|-------|-------------------------------------------------------------------------------------------------------------------|

Table 121: Register 0x0E08:0x0E0F (Vendor ID)

<!-- image -->

## 6.4.22 Process Data RAM

The Process Data RAM starts at address 0x1000 .

## 6.4.22.1 Process Data RAM ( 0x1000:0xFFFF )

The size of the Process Data RAM depends on the device.

| - - -   | Process Data RAM   | (r/w)   | (r/w)   | Random/unde/uniFB01ned   |
|---------|--------------------|---------|---------|--------------------------|

ECAT

PDI

Table 122: Process Data RAM (0x1000:0xFFFF)

(r/w): Process Data RAM is only accessible if EEPROM was correctly loaded (register 0x0110.0 = 1).

Device

Process Data RAM Size

Upper RAM Address

Table 123: Process Data RAM Size

| TMC8460   | 16kBytes   | 0x4FFF   |
|-----------|------------|----------|
| TMC8461   | 16kBytes   | 0x4FFF   |
| TMC8462   | 16kBytes   | 0x4FFF   |
| TMC8670   | 4kBytes    | 0x1FFF   |

Bytes

## Note

Description

Reset Value

<!-- image -->

## 7 MFC IO Block Description

The MFC IO block includes a set of functions realized as dedicated hardware blocks.

## 7.1 General Information

The MFC IO block offers 24 fully con/uniFB01gurable IOs that can be used with any function of the MFC IO block. 16 low voltage IOs capable of 3.3V or 5V and 8 high voltage IOs capable of up to 24V are available.

Whenusing the MFC IO control interface the microcontroller has full control over the MFC IO block and its hardware functions. This allows for o/uniFB04oading some /uniFB01rmware tasks towards the TMC8462A, to do system level control, or to extend the microcontroller's IO capabilities.

The MFC IO block functions can be used either via the MFC IO control interface (see section 5.2) or via EtherCAT data objects mapped as registers to the Process Data Memory.

Whenaccessing the MFC IO block via EtherCAT data objects, centralized control from the EtherCAT master is enabled. It it also possible to use the TMC8462A in device emulation mode without any microcontroller connected while still using the dedicated hardware blocks and functions of the MFC IO block. For example, the SPI master interface of the MFC IO block can be used to connected to a position sensor, which is read out by the EtherCAT master.

SII EEPROM con/uniFB01guration data must be of category 1 and is automatically loaded at startup and written into the ESC Parameter Ram section of the EtherCAT Register Set starting at address 0x0580 (see Section 6.4.11.1).

Con/uniFB01guration of the MFC IO block is done via the SII EEPROM at startup or by the EtherCAT master or microcontroller after startup.

The ESC Parameter RAM section can also be written by the EtherCAT master or the local microcontroller for direct con/uniFB01guration or to modify con/uniFB01guration after startup. The block diagram in Figure 31 shows the general approach for the MFC IO block con/uniFB01guration.

| Note   | CAT access feature is not used, it is recommended to store at least the crossbar con/uniFB01guration (section 7.5), the HVIO con/uniFB01guration (section 7.6) and the switching regulator con/uniFB01guration (section 7.7) in the SII EEPROM. By doing this, the settings are loaded faster than having to write them from the microcontroller and it also reduces the memory usage on the microcontroller itself.   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | The MFC IO block parameters and register can be mapped into the the ESC Pro- cess Data RAM. For some applications and combinations it is possible to use these registers as cyclic data within a SyncManager. This is not possible for all registers and combinations and depends on the use case!                                                                                                                     |

<!-- image -->

<!-- image -->

Figure 31: MFC IO Block Con/uniFB01guration using the ESC Parameter RAM

<!-- image -->

## 7.2 MFC IO Register Overview

The registers can always be read by a microcontroller via the MFC IO Control SPI Interface.

The MFC IO block contains a range of registers dedicated to the speci/uniFB01c sub-blocks.

The analog and high voltage block can also be con/uniFB01gured using dedicated registers of the MFC IO block.

The registers can only be exclusively written by either the microcontroller via the MFC IO Control SPI Interface or by the EtherCAT master via a mapping in the ESC's DPRAM.

Register

Function

Write/Read

Size (Byte)

Padding

Bytes

(see section

|    |                   |    |    |   7.8) |
|----|-------------------|----|----|--------|
|  0 | ENC_MODE          | W  |  2 |      2 |
|  1 | ENC_STATUS        | R  |  1 |      3 |
|  2 | X_ENC             | W  |  4 |      0 |
|  3 | X_ENC             | R  |  4 |      0 |
|  4 | ENC_CONST         | W  |  4 |      0 |
|  5 | ENC_LATCH         | R  |  4 |      0 |
|  6 | SPI_RX_DATA       | R  |  8 |      0 |
|  7 | SPI_TX_DATA       | W  |  8 |      0 |
|  8 | SPI_CONF          | W  |  2 |      2 |
|  9 | SPI_STATUS        | R  |  1 |      3 |
| 10 | SPI_LENGTH        | W  |  1 |      3 |
| 11 | SPI_TIME          | W  |  1 |      3 |
| 12 | I2C_TIMEBASE      | W  |  1 |      3 |
| 13 | I2C_CONTROL       | W  |  1 |      3 |
| 14 | I2C_STATUS        | R  |  1 |      3 |
| 15 | I2C_ADDRESS       | W  |  1 |      3 |
| 16 | I2C_DATA_R        | R  |  1 |      3 |
| 17 | I2C_DATA_W        | W  |  1 |      3 |
| 18 | SD_CH0_STEPRATE   | W  |  4 |      0 |
| 19 | SD_CH1_STEPRATE   | W  |  4 |      0 |
| 20 | SD_CH2_STEPRATE   | W  |  4 |      0 |
| 21 | SD_CH0_STEPCOUNT  | R  |  4 |      0 |
| 22 | SD_CH1_STEPCOUNT  | R  |  4 |      0 |
| 23 | SD_CH2_STEPCOUNT  | R  |  4 |      0 |
| 24 | SD_CH0_STEPTARGET | W  |  4 |      0 |
| 25 | SD_CH1_STEPTARGET | W  |  4 |      0 |
| 26 | SD_CH2_STEPTARGET | W  |  4 |      0 |
| 27 | SD_CH0_COMPARE    | W  |  4 |      0 |

<!-- image -->

Register

Function

Write/Read

Size (Byte)

Padding

Bytes

(see section

|    |                     |    |    |   7.8) |
|----|---------------------|----|----|--------|
| 28 | SD_CH1_COMPARE      | W  |  4 |      0 |
| 29 | SD_CH2_COMPARE      | W  |  4 |      0 |
| 30 | SD_CH0_NEXTSR       | W  |  4 |      0 |
| 31 | SD_CH1_NEXTSR       | W  |  4 |      0 |
| 32 | SD_CH2_NEXTSR       | W  |  4 |      0 |
| 33 | SD_STEPLENGTH       | W  |  6 |      2 |
| 34 | SD_DELAY            | W  |  6 |      2 |
| 35 | SD_CFG              | W  |  3 |      1 |
| 36 | PWM_CFG             | W  |  8 |      0 |
| 37 | PWM1                | W  |  2 |      2 |
| 38 | PWM2                | W  |  2 |      2 |
| 39 | PWM3                | W  |  2 |      2 |
| 40 | PWM4                | W  |  2 |      2 |
| 41 | PWM1_CNTRSHFT       | W  |  2 |      2 |
| 42 | PWM2_CNTRSHFT       | W  |  2 |      2 |
| 43 | PWM3_CNTRSHFT       | W  |  2 |      2 |
| 44 | PWM4_CNTRSHFT       | W  |  2 |      2 |
| 45 | PWM_PULSE_B_PULSE_A | W  |  4 |      0 |
| 46 | PWM_PULSE_LENGTH    | W  |  1 |      3 |
| 47 | GPO                 | W  |  4 |      0 |
| 48 | GPI                 | R  |  2 |      2 |
| 49 | GPIO_CONFIG         | W  |  2 |      2 |
| 50 | DAC_VAL             | W  |  2 |      2 |
| 51 | MFCIO_IRQ_CFG       | W  |  3 |      1 |
| 52 | MFCIO_IRQ_FLAGS     | R  |  3 |      1 |
| 53 | WD_TIME             | W  |  4 |      0 |
| 54 | WD_CFG              | W  |  1 |      3 |
| 55 | WD_OUT_MASK_POL     | W  |  8 |      0 |
| 56 | WD_OE_POL           | W  |  4 |      0 |
| 57 | WD_IN_MASK_POL      | W  |  8 |      0 |
| 58 | WD_MAX              | R  |  4 |      0 |
| 59 | HV_ANA_STATUS       | R  |  4 |      0 |
| 60 | unused/reserved     | -  |  0 |      0 |

<!-- image -->

Register

Function

Write/Read

Size (Byte)

Padding

Table 124: MFC IO Register Overview for TMC8462A-BA

|    |                       |               |    |   7.8) |
|----|-----------------------|---------------|----|--------|
| 61 | unused/reserved       | -             |  0 |      0 |
| 62 | unused/reserved       | -             |  0 |      0 |
| 63 | SYNC1_SYNC0_EVENT_CNT | R (ECAT only) |  4 |      0 |
| 64 | HVIO_CFG              | W             |  4 |      0 |
| 65 | BUCK_CONV_CFG         | W             |  2 |      2 |
| 66 | AL_OVERRIDE           | W             |  1 |      3 |

Bytes

(see section

<!-- image -->

## 7.3 MFC IO Register Set

## 7.3.1.1 Register 0 - ENC\_MODE

## 7.3.1 Incremental Encoder Interface

Bit

Description

ECAT

Table 125: MFC IO Register 0 - ENC\_MODE

| 0     | pol_A Required A polarity for an Nchannel event (0: neg., 1: pos.)                                                                                                                                                                                                                                          | r/w   | r/w   |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 1     | pol_B Required B polarity for an Nchannel event (0: neg., 1: pos.)                                                                                                                                                                                                                                          | r/w   | r/w   |
| 2     | pol_N De/uniFB01nes active polarity of N (0: neg., 1: pos.)                                                                                                                                                                                                                                                 | r/w   | r/w   |
| 3     | ignore_AB 0: An N event occurs only when polarities given by pol_N, pol_A and pol_B match. 1: Ignore A and B polarity for N channel event                                                                                                                                                                   | r/w   | r/w   |
| 4     | clr_cont 1: Always latch or latch and clear X_ENC upon an N event (once per revolution, it is recommended to combine this setting with edge sensitive N event)                                                                                                                                              | r/w   | r/w   |
| 5     | clr_once 1: Latch or latch and clear X_ENC on the next N event fol- lowing the write access                                                                                                                                                                                                                 | r/w   | r/w   |
| 7:6   | neg_edge bit n & pos_edge bit p n p : N channel event sensitivity 0 0 : Nchannel event is active during an active Nevent level 0 1 : N channel is valid upon active going N event 1 0 : N channel is valid upon inactive going N event 1 1 : Nchannel is valid upon active going and inactive going N event | r/w   | r/w   |
| 8     | clr_enc_x 0: On Nevent, X_ENC becomes latched to ENC_LATCH only 1: Latch & additionally clear X_ENC at N-event                                                                                                                                                                                              | r/w   | r/w   |
| 9     | latch_x_act 1: Also latch XACTUAL position together with X_ENC. Allows latching the ramp generator position upon an N channel event as selected by pos_edge and neg_edge.                                                                                                                                   | r/w   | r/w   |
| 10    | enc_sel_decimal 0: Encoder prescaler divisor binary mode: Counts ENC_CONST(fractional part) / 65536 1: Encoder prescaler divisor decimal mode: Counts in ENC_CONST(fractional part) / 10000                                                                                                                 | r/w   | r/w   |
| 15:11 | Reserved                                                                                                                                                                                                                                                                                                    | -/-   | -/-   |

PDI

Range [Unit]

<!-- image -->

## 7.3.1.2 Register 1 - ENC\_STATUS

Bit

Description

ECAT

PDI

Table 126: MFC IO Register 1 - ENC\_STATUS

| 0   | n_event 1: Encoder N event detected. Status bit is cleared on read: Read (R) + clear (C) This event can also be ORed into the interrupt output signal. See Register 51 and 52.   | r+c/-   | r+c/-   |
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| 7:1 | Reserved                                                                                                                                                                         | r/-     | r/-     |

## 7.3.1.3 Register 2 - X\_ENC (write)

Bit

Description

ECAT

PDI

Table 127: MFC IO Register 2 - X\_ENC (write)

| 31:0   | Actual encoder position (signed)   | r/w   | r/w   | - 2 31 . . . +(2 31 ) - 1   |
|--------|------------------------------------|-------|-------|-----------------------------|

## 7.3.1.4 Register 3 - X\_ENC (read)

Bit

Description

ECAT

PDI

Table 128: MFC IO Register 3 - X\_ENC (read)

| 31:0   | Actual encoder position (signed)   | r/-   | r/-   | - 2 31 . . . +(2 31 ) - 1   |
|--------|------------------------------------|-------|-------|-----------------------------|

## 7.3.1.5 Register 4 - ENC\_CONST

Bit

Description

ECAT

PDI

Table 129: MFC IO Register 4 - ENC\_CONST

| 31:0   | Accumulation constant (signed) 16 bit integer part, 16 bit fractional part X_ENC accumulates ± ENC _ CONST (2 16 ∗ X _ ENC ) (binary) or ± ENC _ CONST (10 4 ∗ X _ ENC ) (decimal) ENC_MODE bit enc_sel_decimal switches be- tweendecimalandbinarysetting. Usethesign, to match rotation direction!   | r/w   | r/w   | binary: ± [ µsteps/ 2 16 ] ± (0 . . . 32767 . 9999847) decimal: ± (0 . . . 32767 . 9999) reset default = 1 . 0(= 65536)   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|---------------------------------------------------------------------------------------------------------------------------|

Range [Unit]

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.1.6 Register 5 - ENC\_LATCH

Bit

Description

ECAT

PDI

Table 130: MFC IO Register 5 - ENC\_LATCH

| 31:0   | Encoder position X_ENC latched on N event   | r/-   | r/-   | - 2 31 . . . +(2 31 ) - 1   |
|--------|---------------------------------------------|-------|-------|-----------------------------|

Range [Unit]

<!-- image -->

## 7.3.2 SPI Master Interface

## 7.3.2.1 Register 6 - SPI\_RX\_DATA

Bit

Description

| 63:0   | Received data from last SPI transfer For SPI transfers with less than 64 bit, the up- per bits of this register are unused   | r/-   | r/-   |
|--------|------------------------------------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 131: MFC IO Register 6 - SPI\_RX\_DATA

## 7.3.2.2 Register 7 - SPI\_TX\_DATA

Bit

## Note

Description

ECAT

PDI

Table 132: MFC IO Register 7 - SPI\_TX\_DATA

| 63:0   | Data to transmit on next SPI transfer For SPI transfers with less than 64 bit, the up- per bits of this register are unused   | -/w   | -/w   |
|--------|-------------------------------------------------------------------------------------------------------------------------------|-------|-------|

Unless con/uniFB01gured otherwise in the SPI\_CONF register (bits 10:8), writing data into this register automatically starts transmission as soon as the highest byte (according to SPI\_LENGTH con/uniFB01guration) has been written. All bytes to be transmitted must be written to the register within a single access (via MFC IO Control SPI or from the DPRAM) to ensure data consistency.

## 7.3.2.3 Register 8 - SPI\_CONF

Bit

Description

|   1:0 | Selection of SPI slave                                   | r/w   | r/w   |
|-------|----------------------------------------------------------|-------|-------|
|     2 | reserved                                                 | r/w   | r/w   |
|     3 | KeepCSlowafter transfer for transfers greater than 64bit | r/w   | r/w   |
|     4 | transmit LSB /uniFB01rst                                 | r/w   | r/w   |
|     5 | SPI clock phase                                          | r/w   | r/w   |
|     6 | SPI clock polarity                                       | r/w   | r/w   |
|     7 | reserved                                                 | r/w   | r/w   |

Range [Unit]

<!-- image -->

ECAT

PDI

Range [Unit]

Range [Unit]

Bit

Description

ECAT

PDI

Table 133: MFC IO Register 8 - SPI\_CONF

| 10:8   | Trigger con/uniFB01guration for transmission start 000 2 : Start whendata is written into TX register 001 2 : Start on beginning of PWMcycle 010 2 : Start on center of PWMcycle 011 2 : Start on PWMAmark 100 2 : Start on PWMBmark 101 2 : Start on PWMA&B marks 110 2 : reserved 111 2 : Start on single trigger (Bit 15)   | r/w   | r/w   | 0 10 . . . 7 10   |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------------------|
| 14:11  | reserved                                                                                                                                                                                                                                                                                                                       | r/w   | r/w   |                   |
| 15     | Start transfer once when this bit is set and trig- ger con/uniFB01guration is set to 111 2                                                                                                                                                                                                                                     | r/w   | r/w   |                   |

## 7.3.2.4 Register 9 - SPI\_STATUS

Bit

Description

ECAT

PDI

Table 134: MFC IO Register 9 - SPI\_STATUS

| 0   | SPI transfer done, ready for next transfer   | r/-   | r/-   |    |
|-----|----------------------------------------------|-------|-------|----|
| 7:1 | unused                                       | r/-   | r/-   |  0 |

## 7.3.2.5 Register 10 - SPI\_LENGTH

Bit

Description

ECAT

PDI

Table 135: MFC IO Register 10 - SPI\_LENGTH

| 5:0   | SPI datagram length Example: 000111 2 = 8 bit datagram Example: 111111 2 = 64 bit datagram   | -/w   | -/w   |   0 10 . . . 63 10 [bit] |
|-------|----------------------------------------------------------------------------------------------|-------|-------|--------------------------|
| 7:6   | unused                                                                                       | -/w   | -/w   |                        0 |

## 7.3.2.6 Register 11 - SPI\_TIME

Bit

Description

| 7:0   | SPI_BIT_DURATION f SPI = 25 MHz (4+(2 ∗ SPI _ BIT _ DURATION ))   | -/w   | -/w   | 0 10 . . . 255 10   |
|-------|-------------------------------------------------------------------|-------|-------|---------------------|

ECAT

PDI

Table 136: MFC IO Register 11 - SPI\_TIME

Range [Unit]

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.3 I2C Master Interface

## 7.3.3.1 Register 12 - I2C\_TIMEBASE

Bit

Description

| 7:0   | I2C_BIT_DURATION 0 = off 1 . . . 255 = 1 µs.. . 255 µs = 250 kbit/s . . . 980 bit/s   | -/w   | -/w   | 0 10 . . . 255 10 [ µs ]   |
|-------|---------------------------------------------------------------------------------------|-------|-------|----------------------------|

ECAT

PDI

Table 137: MFC IO Register 12 - I2C\_TIMEBASE

## 7.3.3.2 Register 13 - I2C\_CONTROL

Bit

Description

ECAT

PDI

Table 138: MFC IO Register 13 - I2C\_CONTROL

| 0   | receive Data and send NACK                                             | -/w   | -/w   |
|-----|------------------------------------------------------------------------|-------|-------|
| 1   | receive Data and send ACK                                              | -/w   | -/w   |
| 2   | Send Data (content of data I2C_DATA_W)                                 | -/w   | -/w   |
| 3   | Send Address (content of address register I2C_ADDRESS), incl. R/nW bit | -/w   | -/w   |
| 4   | Send Stop Condition                                                    | -/w   | -/w   |
| 5   | Send Start Condition (also Repeated Start)                             | -/w   | -/w   |
| 7:6 | unused                                                                 | -/w   | -/w   |

## 7.3.3.3 Register 14 - I2C\_STATUS

Bit

Description

ECAT

PDI

Table 139: MFC IO Register 14 - I2C\_STATUS

|   0 | St - Start condition sent           | r/-   | r/-   |
|-----|-------------------------------------|-------|-------|
|   1 | RSt - Repeated Start condition sent | r/-   | r/-   |
|   2 | ADR - Transmit Address mode         | r/-   | r/-   |
|   3 | RX - Read from Slave mode           | r/-   | r/-   |
|   4 | TX - Write to slave mode            | r/-   | r/-   |
|   5 | ACK - Acknowledge received/sent     | r/-   | r/-   |
|   6 | NAK - Not Acknowledge received/sent | r/-   | r/-   |
|   7 | ERR - Error Flag                    | r/-   | r/-   |

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.3.4 Register 15 - I2C\_ADDRESS

Bit

Description

ECAT

PDI

Table 140: MFC IO Register 15 - I2C\_ADDRESS

| 0   | R/nW bit   | -/w   | -/w   |     |
|-----|------------|-------|-------|-----|
|     | Address    | -/w   | -/w   | 7:1 |

## 7.3.3.5 Register 16 - I2C\_DATA\_R

Bit

Description

ECAT

PDI

Table 141: MFC IO Register 16 - I2C\_DATA\_R

| 7:0   | Received data   | r/-   | r/-   |
|-------|-----------------|-------|-------|

## 7.3.3.6 Register 17 - I2C\_DATA\_W

Bit

Description

ECAT

PDI

Table 142: MFC IO Register 17 - I2C\_DATA\_W

| 7:0   | Transmit data   | -/w   | -/w   |
|-------|-----------------|-------|-------|

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.4 Step and Direction Signal Generator

## 7.3.4.1 Register 18 - SD\_CH0\_STEPRATE

Bit

Description

| 31:0   | Signed accumulation constant c for SD_CH0. This accumulation constant determines the time tSTEP between two successive steps and thereby the step frequency. TheSign(MSB)ofthis accumulation constant is used for the direction signal output (D0, D0n). The accumulation constant c is 2th comple- ment. (see also Section 7.14)   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Table 143: MFC IO Register 18 - SD\_CH0\_STEPRATE

## 7.3.4.2 Register 19 - SD\_CH1\_STEPRATE

Bit

Description

| 31:0   | Signed accumulation constant c for SD_CH1. This accumulation constant determines the time tSTEP between two successive steps and thereby the step frequency. TheSign(MSB)ofthis accumulation constant is used for the direction signal output (D1, D1n). The accumulation constant c is 2th comple- ment. (see also Section 7.14)   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Table 144: MFC IO Register 19 - SD\_CH1\_STEPRATE

## 7.3.4.3 Register 20 - SD\_CH2\_STEPRATE

Bit

Description

| 31:0   | Signed accumulation constant c for SD_CH2. This accumulation constant determines the time tSTEP between two successive steps and thereby the step frequency. TheSign(MSB)ofthis accumulation constant is used for the direction signal output (D2, D2n). The accumulation constant c is 2th comple- ment. (see also Section 7.14)   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Table 145: MFC IO Register 20 - SD\_CH2\_STEPRATE

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.4.4 Register 21 - SD\_CH0\_STEPCOUNT

Bit

Description

| 31:0   | Step counter for SD_CH0. Counting up/down depending on step direc- tion.   | r/-   | r/-   | - 2 31 . . . +(2 31 ) - 1   |
|--------|----------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Range [Unit]

Table 146: MFC IO Register 21 - SD\_CH0\_STEPCOUNT

## 7.3.4.5 Register 22 - SD\_CH1\_STEPCOUNT

Bit

Description

| 31:0   | Step counter for SD_CH1. Counting up/down depending on step direc- tion.   | r/-   | r/-   | - 2 31 . . . +(2 31 ) - 1   |
|--------|----------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Range [Unit]

Table 147: MFC IO Register 22 - SD\_CH1\_STEPCOUNT

## 7.3.4.6 Register 23 - SD\_CH2\_STEPCOUNT

Bit

Description

| 31:0   | Step counter for SD_CH2. Counting up/down depending on step direc- tion.   | r/-   | r/-   | - 2 31 . . . +(2 31 ) - 1   |
|--------|----------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Range [Unit]

Table 148: MFC IO Register 23 - SD\_CH2\_STEPCOUNT

## 7.3.4.7 Register 24 - SD\_CH0\_STEPTARGET

Bit

Description

| 31:0   | Steps pulses (= distance) to be made for SD_CH0. Can be overwritten at any time. Whenzero, nomoresteppulses are generated at output S0 or S0n, Reading the register returns the remaining number of step pulses to be generated.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Range [Unit]

Table 149: MFC IO Register 24 - SD\_CH0\_STEPTARGET

<!-- image -->

## 7.3.4.8 Register 25 - SD\_CH1\_STEPTARGET

Bit

Description

| 31:0   | Steps pulses (= distance) to be made for SD_CH1. Can be overwritten at any time. Whenzero, nomoresteppulses are generated at output S1 or S1n, Reading the register returns the remaining number of step pulses to be generated.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Range [Unit]

Table 150: MFC IO Register 25 - SD\_CH1\_STEPTARGET

## 7.3.4.9 Register 26 - SD\_CH2\_STEPTARGET

Bit

Description

| 31:0   | Steps pulses (= distance) to be made for SD_CH2. Can be overwritten at any time. Whenzero, nomoresteppulses are generated at output S2 or S2n, Reading the register returns the remaining number of step pulses to be generated.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Range [Unit]

Table 151: MFC IO Register 26 - SD\_CH2\_STEPTARGET

## 7.3.4.10 Register 27 - SD\_CH0\_COMPARE

Bit

Description

| 31:0   | Comparison value to compare with actual value of SD_CH0_STEPCOUNT. When both are equal and bit 6 in SD_CFG is set, the next step rate as con/uniFB01gured in SD_CH0_NEXTSR will be assigned and used for SD_CH0_SR.   | -/w   | -/w   | - 2 31 . . . +(2 31 ) - 1   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Table 152: MFC IO Register 27 - SD\_CH0\_COMPARE

Range [Unit]

<!-- image -->

## 7.3.4.11 Register 28 - SD\_CH1\_COMPARE

Bit

Description

| 31:0   | Comparison value to compare with actual value of SD_CH1_STEPCOUNT. When both are equal and bit 6 in SD_CFG is set, the next step rate as con/uniFB01gured in SD_CH1_NEXTSR will be assigned and used for SD_CH1_SR.   | -/w   | -/w   | - 2 31 . . . +(2 31 ) - 1   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Table 153: MFC IO Register 28 - SD\_CH1\_COMPARE

## 7.3.4.12 Register 29 - SD\_CH2\_COMPARE

Bit

Description

| 31:0   | Comparison value to compare with actual value of SD_CH2_STEPCOUNT. When both are equal and bit 6 in SD_CFG is set, the next step rate as con/uniFB01gured in SD_CH2_NEXTSR will be assigned and used for SD_CH2_SR.   | -/w   | -/w   | - 2 31 . . . +(2 31 ) - 1   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-----------------------------|

ECAT

PDI

Table 154: MFC IO Register 29 - SD\_CH2\_COMPARE

## 7.3.4.13 Register 30 - SD\_CH0\_NEXTSR

Bit

Description

ECAT

PDI

Table 155: MFC IO Register 30 - SD\_CH0\_NEXTSR

| 31:0   | Next accumulation constant that will be writ- ten to SD_CH0_STEPRATE at compare event.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------|-------|-------|------------------------|

## 7.3.4.14 Register 31 - SD\_CH1\_NEXTSR

Bit

Description

ECAT

PDI

Table 156: MFC IO Register 31 - SD\_CH1\_NEXTSR

| 31:0   | Next accumulation constant that will be writ- ten to SD_CH1_STEPRATE at compare event.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------|-------|-------|------------------------|

Range [Unit]

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.4.15 Register 32 - SD\_CH2\_NEXTSR

Bit

Description

ECAT

PDI

Table 157: MFC IO Register 32 - SD\_CH2\_NEXTSR

| 31:0   | Next accumulation constant that will be writ- ten to SD_CH2_STEPRATE at compare event.   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|------------------------------------------------------------------------------------------|-------|-------|------------------------|

## 7.3.4.16 Register 33 - SD\_STEPLENGTH

Bit

## Note

Description

ECAT

PDI

Table 158: MFC IO Register 33 - SD\_STEPLENGTH

| 15:0   | Con/uniFB01gurable step pulse length for SD_CH0 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |
|--------|-----------------------------------------------------------------------------------|-------|-------|------------------------|
| 31:16  | Con/uniFB01gurable step pulse length for SD_CH1 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |
| 47:32  | Con/uniFB01gurable step pulse length for SD_CH2 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |

Maximum step length: The individual step pulse length t STEP \_ PULSE [s] must be lower than the time t STEP [s] between step pulses to actually see step pulses. The condition t STEP \_ PULSE &lt; t STEP must be ensured by the application. Also refer to Section 7.14 for more details and formulas for calculation.

## 7.3.4.17 Register 34 - SD\_DELAY

Bit

Note

Description

ECAT

PDI

Table 159: MFC IO Register 34 - SD\_DELAY

| 15:0   | Con/uniFB01gurable step-to-direction delay for SD_CH0 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |
|--------|-----------------------------------------------------------------------------------------|-------|-------|------------------------|
| 31:16  | Con/uniFB01gurable step-to-direction delay for SD_CH1 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |
| 47:32  | Con/uniFB01gurable step-to-direction delay for SD_CH2 in terms of 25MHz clock cycles.   | -/w   | -/w   | 0 . . . +(2 16 ) - 1   |

Step-to-direction delay is the delay between the /uniFB01rst step pulse after a change of the direction.

<!-- image -->

Range [Unit]

Range [Unit]

Range [Unit]

## 7.3.4.18 Register 35 - SD\_CFG

Bit

Description

Table 160: MFC IO Register 35 - SD\_CFG

|   0 | 0/1: 0 = enabled, 1 = disabled SD_CH0                                               | -/w   | -/w   |
|-----|-------------------------------------------------------------------------------------|-------|-------|
|   1 | 0 = generate N pulses based on SD_CH0_STEPTARGET register value 1 = continuous mode | -/w   | -/w   |
|   2 | S0 and S0n step pulse signal polarity                                               | -/w   | -/w   |
|   3 | D0 and D0n direction signal polarity                                                | -/w   | -/w   |
|   4 | 1 = clears SD_CH0_STEPCOUNT, user needs to set it back to 0 afterwards              | -/w   | -/w   |
|   5 | 0/1: 0 = normal step pulses, 1 = toggle mode                                        | -/w   | -/w   |
|   6 | 1 = use SD_CH0_NEXTSR for SD_CH0_STEPRATE on compare event                          | -/w   | -/w   |
|   7 | reserved                                                                            | -/w   | -/w   |
|   8 | 0/1: 0 = enabled, 1 = disabled SD_CH1                                               | -/w   | -/w   |
|   9 | 0 = generate N pulses based on SD_CH1_STEPTARGET register value 1 = continuous mode | -/w   | -/w   |
|  10 | S1 and S1n step pulse signal polarity                                               | -/w   | -/w   |
|  11 | D1 and D1n direction signal polarity                                                | -/w   | -/w   |
|  12 | 1 = clears SD_CH1_STEPCOUNT, user needs to set it back to 0 afterwards              | -/w   | -/w   |
|  13 | 0/1: 0 = normal step pulses, 1 = toggle mode                                        | -/w   | -/w   |
|  14 | 1 = use SD_CH1_NEXTSR for SD_CH1_STEPRATE on compare event                          | -/w   | -/w   |
|  15 | reserved                                                                            | -/w   | -/w   |
|  16 | 0/1: 0 = enabled, 1 = disabled SD_CH2                                               | -/w   | -/w   |
|  17 | 0 = generate N pulses based on SD_CH2_STEPTARGET register value 1 = continuous mode | -/w   | -/w   |
|  18 | S2 and S2n step pulse signal polarity                                               | -/w   | -/w   |
|  19 | D2 and D2n direction signal polarity                                                | -/w   | -/w   |
|  20 | 1 = clears SD_CH2_STEPCOUNT, user needs to set it back to 0 afterwards              | -/w   | -/w   |
|  21 | 0/1: 0 = normal step pulses, 1 = toggle mode                                        | -/w   | -/w   |
|  22 | 1 = use SD_CH2_NEXTSR for SD_CH2_STEPRATE on compare event                          | -/w   | -/w   |
|  23 | reserved                                                                            | -/w   | -/w   |

ECAT

PDI

<!-- image -->

## 7.3.5 PWMUnit

## 7.3.5.1 Register 36 - PWM\_CFG

Bit

Description

| 11:0   | PWMmax count                                                                                                                                                                                                                                                     | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 18:16  | PWMch0 chopper mode See Section 7.15 for more details.                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 19     | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 22:20  | PWMch1 chopper mode See Section 7.15 for more details.                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 23     | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 26:24  | PWMch2 chopper mode See Section 7.15 for more details.                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 27     | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 30:28  | PWMch3 chopper mode See Section 7.15 for more details.                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 31     | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 33:32  | PWMalignment for all PWMchannels                                                                                                                                                                                                                                 | -/w   | -/w   |                        |
| 39:34  | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 47:40  | Signal Polarities for all PWMchannels Bit 40 = PWMlow sides polarity Bit 41 = PWMhigh sides polarity Bit 42 = PWMABpulses polarity Bit 43 = PWMBpulses polarity Bit 44 = PWMCenter pulses polarity Bit 45 = PWMApulses polarity Bit 46 = PWMZero pulses polarity | -/w   | -/w   |                        |
| 47     | unused                                                                                                                                                                                                                                                           | -/w   | -/w   |                        |
| 55:48  | BBM low sides. Brake before make time in terms of 100MHz clock cycles for low side MOSFET control                                                                                                                                                                | -/w   | -/w   | 0 . . . +(2 8 ) - 1    |
| 63:56  | BBM high sides. Brake before make time in terms of 100MHz clock cycles for high side MOSFET control                                                                                                                                                              | -/w   | -/w   | 0 . . . +(2 8 ) - 1    |

ECAT

PDI

Table 161: MFC IO Register 36 - PWM\_CFG

Range [Unit]

<!-- image -->

## 7.3.5.2 Register 37 - PWM1

Bit

Description

## 7.3.5.3 Register 38 - PWM2

Bit

Description

## 7.3.5.4 Register 39 - PWM3

Bit

Description

## 7.3.5.5 Register 40 - PWM4

Bit

Description

| 11:0   | PWMduty cycle (on time) for PWM4   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------|-------|-------|------------------------|
| 15:12  | unused                             | -/w   | -/w   |                        |

ECAT

PDI

Table 162: MFC IO Register 37 - PWM1

| 11:0   | PWMduty cycle (on time) for PWM1   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------|-------|-------|------------------------|
| 15:12  | unused                             | -/w   | -/w   |                        |

ECAT

PDI

Table 163: MFC IO Register 38 - PWM2

| 11:0   | PWMduty cycle (on time) for PWM2   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------|-------|-------|------------------------|
| 15:12  | unused                             | -/w   | -/w   |                        |

ECAT

PDI

Table 164: MFC IO Register 39 - PWM3

| 11:0   | PWMduty cycle (on time) for PWM3   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------|-------|-------|------------------------|
| 15:12  | unused                             | -/w   | -/w   |                        |

ECAT

PDI

Table 165: MFC IO Register 40 - PWM4

## 7.3.5.6 Register 41 - PWM1\_CNTRSHFT

Range [Unit]

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

Bit

Description

ECAT

PDI

Table 166: MFC IO Register 41 - PWM1\_CNTRSHFT

| 11:0   | Shift value for PWM1 to shift PWM1 high side and low side signal edges with respect to the aligned PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                                                           | -/w   | -/w   |                        |

## 7.3.5.7 Register 42 - PWM2\_CNTRSHFT

Bit

Description

ECAT

PDI

Table 167: MFC IO Register 42 - PWM2\_CNTRSHFT

| 11:0   | Shift value for PWM2 to shift PWM2 high side and low side signal edges with respect to the aligned PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                                                           | -/w   | -/w   |                        |

## 7.3.5.8 Register 43 - PWM3\_CNTRSHFT

Bit

Description

ECAT

PDI

Table 168: MFC IO Register 43 - PWM3\_CNTRSHFT

| 11:0   | Shift value for PWM3 to shift PWM3 high side and low side signal edges with respect to the aligned PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                                                           | -/w   | -/w   |                        |

## 7.3.5.9 Register 44 - PWM4\_CNTRSHFT

Bit

Description

ECAT

PDI

Table 169: MFC IO Register 44 - PWM4\_CNTRSHFT

| 11:0   | Shift value for PWM4 to shift PWM4 high side and low side signal edges with respect to the aligned PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|------------------------------------------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                                                           | -/w   | -/w   |                        |

Range [Unit]

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.5.10 Register 45 - PWM\_PULSE\_B\_PULSE\_A

Bit

Description

| 11:0   | Programmable trigger pulse A value with re- spect to the common PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
|--------|-------------------------------------------------------------------------------|-------|-------|------------------------|
| 15:12  | unused                                                                        | -/w   | -/w   |                        |
| 27:16  | Programmable trigger pulse B value with re- spect to the common PWMcounter.   | -/w   | -/w   | 0 . . . +(2 12 ) - 1   |
| 31:28  | unused                                                                        | -/w   | -/w   |                        |

ECAT

PDI

Range [Unit]

Table 170: MFC IO Register 45 - PWM\_PULSE\_B\_PULSE\_A

## 7.3.5.11 Register 46 - PWM\_PULSE\_LENGTH

Bit

Description

| 7:0   | Programmable pulse length for trigger pulse A, B, PWMstart, and PWMcenter.   | -/w   | -/w   | 0 . . . +(2 8 ) - 1   |
|-------|------------------------------------------------------------------------------|-------|-------|-----------------------|

ECAT

PDI

Range [Unit]

Table 171: MFC IO Register 46 - PWM\_PULSE\_LENGTH

<!-- image -->

## 7.3.6 General Purpose I/Os

## 7.3.6.1 Register 47 - GPO

Bit

Note

Description

ECAT

PDI

Table 172: MFC IO Register 47 - GPO

| 15:0   | GPOx output values                                       | -/w   | -/w   |
|--------|----------------------------------------------------------|-------|-------|
| 31:16  | GPOx safe state (when emergency input pin MFC_NES = '0') | -/w   | -/w   |

Bits [31:24] are not available in -ES sample devices.

## 7.3.6.2 Register 48 - GPI

Bit

Description

| 15:0   | GPIx input values   | r/-   | r/-   |
|--------|---------------------|-------|-------|

ECAT

PDI

Table 173: MFC IO Register 48 - GPI

## 7.3.6.3 Register 49 - GPIO\_CONFIG

Bit

Note

Description

ECAT

PDI

Table 174: MFC IO Register 49 - GPIO\_CONFIG

| 15:0   | Output enable con/uniFB01guration for the GPOx sig- nals Disabled = tristated.   | -/w   | -/w   |
|--------|----------------------------------------------------------------------------------|-------|-------|

GPIO\_CONFIG is not available in -ES sample devices.

Range [Unit]

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.7 DAC Unit

## 7.3.7.1 Register 50 - DAC\_VAL

Bit

Description

| 15:0   | 16 bit DAC value which is converted to a pseu- dorandom binary sequence at the DAC output pin   | -/w   | -/w   |
|--------|-------------------------------------------------------------------------------------------------|-------|-------|

ECAT

PDI

Table 175: MFC IO Register 50 - DAC\_VAL

Range [Unit]

<!-- image -->

## 7.3.8 IRQ Control Block

## 7.3.8.1 Register 51 - MFCIO\_IRQ\_CFG

Bit

Description

Note

| 0     | ABN encoder unit N-channel event                            | -/w   | -/w   |
|-------|-------------------------------------------------------------|-------|-------|
| 1     | SD_CH0 target reached event                                 | -/w   | -/w   |
| 2     | SD_CH1 target reached event                                 | -/w   | -/w   |
| 3     | SD_CH2 target reached event                                 | -/w   | -/w   |
| 4     | SD_CH0 compare value event                                  | -/w   | -/w   |
| 5     | SD_CH1 compare value event                                  | -/w   | -/w   |
| 6     | SD_CH2 compare value event                                  | -/w   | -/w   |
| 7     | SPI new data available event                                | -/w   | -/w   |
| 8     | I2C new data available event                                | -/w   | -/w   |
| 9     | I2C transmit complete event                                 | -/w   | -/w   |
| 10    | I2C new data available event OR I2C transmit complete event | -/w   | -/w   |
| 11    | Watchdog Timeout event                                      | -/w   | -/w   |
| 12    | PWMzero pulse event                                         | -/w   | -/w   |
| 13    | PWMcenter pulse event                                       | -/w   | -/w   |
| 14    | PWMApulse event                                             | -/w   | -/w   |
| 15    | PWMBpulse event                                             | -/w   | -/w   |
| 16    | HV_OT_FLAG has been set                                     | -/w   | -/w   |
| 17    | BVOUT_OT_FLAG has been set                                  | -/w   | -/w   |
| 18    | BVOUT_SC_FL has been set                                    | -/w   | -/w   |
| 19    | B3V3_SC_FLAG has been set                                   | -/w   | -/w   |
| 22:20 | unused/reserved                                             | -/w   | -/w   |
| 23    | emergency input pin MFC_NES event                           | -/w   | -/w   |

ECAT

PDI

Table 176: MFC IO Register 51 - MFCIO\_IRQ\_CFG

This register is used for masking / enabling the different IRQ sources, which are or-ed together to set the common MFCIO\_IRQ output signal. The MFCIO\_IRQ is a dedicated package pin of TMC8462A, which can be connected to a local application controller.

<!-- image -->

Range [Unit]

## 7.3.8.2 Register 52 - MFCIO\_IRQ\_FLAGS

Bit

Note

Description

| 0     | ABN encoder unit N-channel event /uniFB02ag                            | r/-   | r/-   |
|-------|------------------------------------------------------------------------|-------|-------|
| 1     | SD_CH0 target reached event /uniFB02ag                                 | r/-   | r/-   |
| 2     | SD_CH1 target reached event /uniFB02ag                                 | r/-   | r/-   |
| 3     | SD_CH2 target reached event /uniFB02ag                                 | r/-   | r/-   |
| 4     | SD_CH0 compare value event /uniFB02ag                                  | r/-   | r/-   |
| 5     | SD_CH1 compare value event /uniFB02ag                                  | r/-   | r/-   |
| 6     | SD_CH2 compare value event /uniFB02ag                                  | r/-   | r/-   |
| 7     | SPI new data available event /uniFB02ag                                | r/-   | r/-   |
| 8     | I2C new data available event /uniFB02ag                                | r/-   | r/-   |
| 9     | I2C transmit complete event /uniFB02ag                                 | r/-   | r/-   |
| 10    | I2C new data available event OR I2C transmit complete event /uniFB02ag | r/-   | r/-   |
| 11    | Watchdog Timeout event /uniFB02ag                                      | r/-   | r/-   |
| 12    | PWMzero pulse event /uniFB02ag                                         | r/-   | r/-   |
| 13    | PWMcenter pulse event /uniFB02ag                                       | r/-   | r/-   |
| 14    | PWMApulse event /uniFB02ag                                             | r/-   | r/-   |
| 15    | PWMBpulse event /uniFB02ag                                             | r/-   | r/-   |
| 16    | HV_OT_FLAG                                                             | r/-   | r/-   |
| 17    | BVOUT_OT_FLAG                                                          | r/-   | r/-   |
| 18    | BVOUT_SC_FL                                                            | r/-   | r/-   |
| 19    | B3V3_SC_FLAG                                                           | r/-   | r/-   |
| 22:20 | unused/reserved                                                        | -/-   | -/-   |
| 23    | emergency input pin MFC_NES event /uniFB02ag                           | r/-   | r/-   |

ECAT

PDI

Table 177: MFC IO Register 52 - MFCIO\_IRQ\_FLAGS

Reading this registers clears all /uniFB02ags.

Range [Unit]

<!-- image -->

## 7.3.9 Watchdog

## 7.3.9.1 Register 53 - WD\_TIME

Bit

Description

## 7.3.9.2 Register 54 - WD\_CFG

Bit

Description

| 0   | cfg_persistent 0 = The watchdog action ends when the next trigger event occurs 1 = A timeout situation can only be cleared by rewriting WD_TIME   | -/w   | -/w   |
|-----|---------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 1   | cfg_pdi_csn_enable 1 = Retrigger by positive edge on PDI_SPI_CSN                                                                                  | -/w   | -/w   |
| 2   | cfg_mfc_csn_enable 1 = Retrigger by positive edge on MFC_CTRL_SPI_CSN                                                                             | -/w   | -/w   |
| 3   | cfg_sof_enable 1 = Retrigger by ETHERCAT start of frame                                                                                           | -/w   | -/w   |
| 4   | cfg_in_edge 0 = Retrigger by input condition becoming false 1 = Retrigger by input condition becoming true                                        | -/w   | -/w   |
| 6:5 | unused/reserved                                                                                                                                   | -/-   | -/-   |
| 7   | cfg_wd_active 1 = Signals an active watchdog timeout                                                                                              | -/w   | -/w   |

ECAT

PDI

Table 178: MFC IO Register 53 - WD\_TIME

| 31:0   | Watchdog time 32 bit/unsigned 0 = Watchdog off, > 0 = number of 25MHz clock cycles   | -/w   | -/w   | 0 . . . +(2 32 ) - 1   |
|--------|--------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Table 179: MFC IO Register 54 - WD\_CFG

Range [Unit]

Range [Unit]

<!-- image -->

## 7.3.9.3 Register 55 - WD\_OUT\_MASK\_POL

Bit

## Note

ECAT

PDI

Range [Unit]

Table 180: MFC IO Register 55 - WD\_OUT\_MASK\_POL

| 23:0   | WD_OUT_POL, Polarity for outputs affected by watchdog ac- tion. each bit corresponds to one output line. The polarity describes the output level desired upon watchdog event.   | -/w   | -/w   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 31:24  | unused/reserved                                                                                                                                                                 | -/-   | -/-   |
| 55:32  | WD_OUT_MASK, Each bit corresponds to one output line. 0 = Output is not affected 1 = Output [i] becomes set to WD_OUT_POL[i] upon watchdog event.                               | -/w   | -/w   |
| 63:56  | unused/reserved                                                                                                                                                                 | -/-   | -/-   |

See Section 7.19 for the detailed signal mapping of WD\_OUT\_MASK\_POL.

## 7.3.9.4 Register 56 - WD\_OE\_POL

Bit

Description

ECAT

PDI

Table 181: MFC IO Register 56 - WD\_OE\_POL

| 31:0   | I/O Output enable level for outputs affected by watchdog action. Each bit corresponds to one output line. The polarity describes the OE setting desired upon watchdog action (1 = output, 0 = input).   | -/w   | -/w   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|

Description

Range [Unit]

<!-- image -->

## 7.3.9.5 Register 57 - WD\_IN\_MASK\_POL

Bit

## Note

ECAT

PDI

Range [Unit]

Table 182: MFC IO Register 57 - WD\_IN\_MASK\_POL

| 23:0   | WD_IN_POL, Input signal levels for watchdog re-triggering. Each bit corresponds to one input line. The polarity describes the input level for sig- nals selected by WD_IN_MASK required to re- trigger the watchdog timer.   | -/w   | -/w   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 31:24  | unused/reserved                                                                                                                                                                                                              | -/-   | -/-   |
| 55:32  | WD_IN_MASK, Each bit corresponds to one input line. 0 = Input is not selected 1 = Input I/O[i] must reach polarity WD_IN_POL[i] to re-trigger the watchdog timer.                                                            | -/w   | -/w   |
| 63:56  | unused/reserved                                                                                                                                                                                                              | -/-   | -/-   |

See Section 7.19 for the detailed signal mapping of WD\_IN\_MASK\_POL.

## 7.3.9.6 Register 58 - WD\_MAX

Bit

Description

| 31:0   | Peak value reached by watchdog timeout counter. Reset to 0 by writing to WD_TIME.   | r/-   | r/-   | 0 . . . +(2 32 ) - 1   |
|--------|-------------------------------------------------------------------------------------|-------|-------|------------------------|

ECAT

PDI

Table 183: MFC IO Register 58 - WD\_MAX

Description

Range [Unit]

<!-- image -->

## 7.3.10 High Voltage Status and General Control

## 7.3.10.1 Register 59 - HV\_ANA\_STATUS

Bit

Description

| 7:0   | HVIO_OUTPUT_HV_DETECT, bit[i] = 1 = high voltage detected at HV output [i]   | r/-   | r/-   |
|-------|------------------------------------------------------------------------------|-------|-------|
| 15:8  | HV_SHORT2GND_DETECT, bit[i] = 1 = short to ground detected at HV IO [i-8]    | r/-   | r/-   |
| 23:16 | HV_SHORT2VS_DETECT, bit[i] = 1 = high voltage detected at HV IO [i-16]       | r/-   | r/-   |
| 24    | HV_OT_FLAG                                                                   | r/-   | r/-   |
| 25    | B3V3_SC_FLAG                                                                 | r/-   | r/-   |
| 26    | BVOUT_SC_FLAG                                                                | r/-   | r/-   |
| 27    | BVOUT_OT_FLAG                                                                | r/-   | r/-   |
| 31:28 | unused/reserved                                                              | r/-   | r/-   |

ECAT

PDI

Table 184: MFC IO Register 59 - HV\_ANA\_STATUS

## 7.3.10.2 Register 63 - SYNC1\_SYNC0\_EVENT\_CNT

Bit

Description

| 15:0   | SYNC_OUT0 event counter value   | r/-   | r/-   | 0 . . . +(2 16 ) - 1   |
|--------|---------------------------------|-------|-------|------------------------|
| 31:16  | SYNC_OUT1 event counter value   | r/-   | r/-   | 0 . . . +(2 16 ) - 1   |

ECAT

PDI

Range [Unit]

Range [Unit]

Table 185: MFC IO Register 63 - SYNC1\_SYNC0\_EVENT\_CNT

Reading does not clear counters.

Counters are running all the time and wrap

| Note   | when maximum count is reached.                                                                                            |
|--------|---------------------------------------------------------------------------------------------------------------------------|
| Note   | Register 63 can only be read when mapped to the ECAT Process Data RAM. It cannot be read from the MCF CTRL SPI interface. |

<!-- image -->

## 7.3.10.3 Register 64 - HVIO\_CFG

Bit

## Note

Description

ECAT

PDI

Table 186: MFC IO Register 64 - HVIO\_CFG

| 7:0   | HV_SLOPE_SLOW Withtheseoptionbits set to 1, the output slope of the MFC_HV[i] pin can be slowed down.                                                                                                                                                  | -/w   | -/w   |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
| 15:8  | HV_WEAK_HIGH With these option bits set to 1, the high level driver strength of the MFC_HV[i-8] pin can be reduced.                                                                                                                                    | -/w   | -/w   |
| 23:16 | HV_WEAK_LOW With these option bits set to 1, the low level driver strength of the MFC_HV[i-16] pin can be reduced.                                                                                                                                     | -/w   | -/w   |
| 27:24 | HV_DIFF_INPUT_EN With these option bits set to 1, two of the MFC_HV inputs can be combined to a differen- tial input pair. Bit 24 = 1 = MFC_HV3 & MFC_HV0 Bit 25 = 1 = MFC_HV4 & MFC_HV1 Bit 26 = 1 = MFC_HV5 & MFC_HV2 Bit 27 = 1 = MFC_HV7 & MFC_HV6 | -/w   | -/w   |
| 31:28 | unused/reserved                                                                                                                                                                                                                                        | -/-   | -/-   |

This register can only be accessed from MFC CTRL SPI interface. It cannot directly be accessed from ECAT master interface. Nevertheless, the register content can be preloaded from SII EEPROM at startup. Therefore, see Section 7.4.

<!-- image -->

Range [Unit]

## 7.3.10.4 Register 65 - BUCK\_CONV\_CFG

Bit

Description

| 1:0   | B3V3_SAW_FREQ 3.3V switching regulator switching frequency (nominal values) 0 : 250kHz 1 : 125kHz 2 : 500kHz 3 : 1MHz           | -/w   | -/w   |    |
|-------|---------------------------------------------------------------------------------------------------------------------------------|-------|-------|----|
| 3:2   | B3V3_FB_AMPL 3.3V switching regulator voltage error feed- back ampli/uniFB01cation 0 : 100% 1 : 150% 2 : 200% : 50%             | -/w   | -/w   | 3  |
| 5:4   | B3V3_FB_CAP 3.3V switching regulator dampening of voltage error feedback 0 : 100% 1 : 150% 2 : 200% 3 : 50%                     | -/w   | -/w   |    |
| 6     | B3V3_SC_DISABLE 3.3V switching regulator disable cycle-to-cycle overcurrent protection 0 : Protection enabled 1 : No protection | -/w   | -/w   |    |
| 7     | unused/reserved                                                                                                                 | -/w   | -/w   |    |
| 9:8   | BVOUT_SAW_FREQ Adjustable switching regulator switching fre- quency (nominal values) 0 : 250kHz 1 : 125kHz 2 : 500kHz 3 : 1MHz  | -/w   | -/w   |    |
| 11:10 | BVOUT_FB_AMPL Adjustable switching regulator voltage error feedback ampli/uniFB01cation 0 : 100% 1 : 150% 2 : 200% 3 : 50%      | -/w   | -/w   |    |

Range [Unit]

<!-- image -->

ECAT

PDI

Bit

Note

Description

ECAT

PDI

Table 187: MFC IO Register 65 - BUCK\_CONV\_CFG

|   13:12 | BVOUT_FB_CAP Adjustable switching regulator dampening of voltage error feedback 0 : 100% 1 : 150% 2 : 200% 3 : 50%                      | -/w   | -/w   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------|-------|-------|
|      14 | BVOUT_SC_DISABLE Adjustable switching regulator disable cycle-to- cycle overcurrent protection 0 : Protection enabled 1 : No protection | -/w   | -/w   |
|      15 | BVOUT_DISABLE Disable adjustable switching regulator 0 : Switching regulator enabled 1 : Switching regulator disabled                   | -/w   | -/w   |

This register can only be accessed from MFC CTRL SPI interface. It cannot directly be accessed from ECAT master interface. Nevertheless, the register content can be preloaded from SII EEPROM at startup. Therefore, see Section 7.4.

<!-- image -->

Range [Unit]

## 7.3.11 Application Layer Control

## 7.3.11.1 Register 66 - AL\_OVERRIDE

Bit

## Note

Description

ECAT

PDI

Table 188: MFC IO Register 66 - AL\_OVERRIDE

| 0   | 0 = no override 1 = override AL state   | -/w   | -/w   |
|-----|-----------------------------------------|-------|-------|
| 7:1 | unused/reserved                         | -/-   | -/-   |

The bit controls override con/uniFB01guration of the 24 MFC IO output ports regarding the output port availability with respect to the actual EtherCAT Slave Controller's AL state.

The ABN functional block, IRQ con/uniFB01guration, Watchdog block are not affected by this con/uniFB01guration option since they only have input ports/signals.

Typically, in an EtherCAT slave the output ports are only available/active when AL state = "'OP"' (operational). If the override bit is set, the AL state is ignored and the MFC IO ports are fully available via the MFC IO Control Interface.

! This register can only be accessed from MFC IO Control Interface. It cannot be accessed from ECAT master side.

When an input port is con/uniFB01gured to be accessed by the EtherCAT master, it can only be read when the EtherCAT state machine is in safe-operational state or operational state.

The input ports are always readable via the MFC IO Control Interface.

When an output port/value is con/uniFB01gured to be controlled by the EtherCAT master, this is only possible when the EtherCAT state machine is in operational state because. This is de/uniFB01ned in the EtherCAT standard.

<!-- image -->

Range [Unit]

## 7.4 SII EEPROM MFC IO Block Parameter Map

MFC IO con/uniFB01guration data is automatically loaded at startup from EEPROM to the ESC Parameter RAM starting at address 0x0580 of the the ESC register set. Therefore, this con/uniFB01guration data has to be of Category 1 .

This section describes the part of the EEPROM content and XML/ESI /uniFB01le that is used to con/uniFB01gure the MFC IO block.

When a Category 1 block is present in the EEPROM at address 0080 h , the EEPROM con/uniFB01guration is automatically loaded at power up of the TMC8462A. It is used for setting up the basic TMC8462A EtherCAT related features.

The con/uniFB01guration can also later be changed during operation via PDI access or via ECAT master access to the TMC8462A memory starting at 0580 h . The memory at address 0580 h corresponds to the beginning of the category data at EEPROM address 0084 h .

| Note   | cess Data RAM. For some applications and combinations it is possible to use these registers as cyclic data within a SyncManager. This is not possible for all registers and combinations and depends on the use case!   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Note

Address

The EEPROM content starting at address 0084 h to address 0103 h (128 bytes) will be loaded into the EtherCAT slave controllers parameter memory at address range 0580 h to 05FF h .

If the category is shorter than 128 bytes, only the amount of data speci/uniFB01ed by 'Category data size' is copied with the remaining bytes being reset to 0.

Address in

Group

Function

| in EEPROM   | ESC RAM   |                                  |                                                              |
|-------------|-----------|----------------------------------|--------------------------------------------------------------|
| 0080 h      | -         | Category header (Lo)             | 01 h                                                         |
| 0081 h      | -         | Category header (Hi)             | 00 h                                                         |
| 0082 h      | -         | Category data size in words (Lo) | 31 h (for the full MFCIO block con/uniFB01g- uration vector) |
| 0083 h      | -         | Category data size in words (Hi) | 00 h                                                         |
| 0084 h      | 0580 h    | Crossbar con/uniFB01guration     | MFCIO00 Con/uniFB01guration (See Sec- tion 7.5)              |
| 0085 h      | 0581 h    | Crossbar con/uniFB01guration     | MFCIO01 Con/uniFB01guration                                  |
| 0086 h      | 0582 h    | Crossbar con/uniFB01guration     | MFCIO02 Con/uniFB01guration                                  |
| 0087 h      | 0583 h    | Crossbar con/uniFB01guration     | MFCIO03 Con/uniFB01guration                                  |
| 0088 h      | 0584 h    | Crossbar con/uniFB01guration     | MFCIO04 Con/uniFB01guration                                  |
| 0089 h      | 0585 h    | Crossbar con/uniFB01guration     | MFCIO05 Con/uniFB01guration                                  |

<!-- image -->

008A

0586

Crossbar con/uniFB01guration

MFCIO06 Con/uniFB01guration

| h      | h      |                                         |                                                         |
|--------|--------|-----------------------------------------|---------------------------------------------------------|
| 008B h | 0587 h | Crossbar con/uniFB01guration            | MFCIO07 Con/uniFB01guration                             |
| 008C h | 0588 h | Crossbar con/uniFB01guration            | MFCIO08 Con/uniFB01guration                             |
| 008D h | 0589 h | Crossbar con/uniFB01guration            | MFCIO09 Con/uniFB01guration                             |
| 008E h | 058A h | Crossbar con/uniFB01guration            | MFCIO10 Con/uniFB01guration                             |
| 008F h | 058B h | Crossbar con/uniFB01guration            | MFCIO11 Con/uniFB01guration                             |
| 0090 h | 058C h | Crossbar con/uniFB01guration            | MFCIO12 Con/uniFB01guration                             |
| 0091 h | 058D h | Crossbar con/uniFB01guration            | MFCIO13 Con/uniFB01guration                             |
| 0092 h | 058E h | Crossbar con/uniFB01guration            | MFCIO14 Con/uniFB01guration                             |
| 0093 h | 058F h | Crossbar con/uniFB01guration            | MFCIO15 Con/uniFB01guration                             |
| 0094 h | 0590 h | Crossbar con/uniFB01guration            | MFC_HV0 Con/uniFB01guration                             |
| 0095 h | 0591 h | Crossbar con/uniFB01guration            | MFC_HV1 Con/uniFB01guration                             |
| 0096 h | 0592 h | Crossbar con/uniFB01guration            | MFC_HV2 Con/uniFB01guration                             |
| 0097 h | 0593 h | Crossbar con/uniFB01guration            | MFC_HV3 Con/uniFB01guration                             |
| 0098 h | 0594 h | Crossbar con/uniFB01guration            | MFC_HV4 Con/uniFB01guration                             |
| 0099 h | 0595 h | Crossbar con/uniFB01guration            | MFC_HV5 Con/uniFB01guration                             |
| 009A h | 0596 h | Crossbar con/uniFB01guration            | MFC_HV6 Con/uniFB01guration                             |
| 009B h | 0597 h | Crossbar con/uniFB01guration            | MFC_HV7 Con/uniFB01guration                             |
| 009C h | 0598 h | HVIO con/uniFB01guration                | Slow Slope (See section 7.6)                            |
| 009D h | 0599 h | HVIO con/uniFB01guration                | Weak High                                               |
| 009E h | 059A h | HVIO con/uniFB01guration                | Weak Low                                                |
| 009F h | 059B h | HVIO con/uniFB01guration                | Differential input                                      |
| 00A0 h | 059C h | Switching Regulator con/uniFB01guration | 3.3V switching regulator (See sec- tion 7.7)            |
| 00A1 h | 059D h | Switching Regulator con/uniFB01guration | Adjustable switching regulator                          |
| 00A2 h | 059E h | Memory block con/uniFB01guration        | Memory block 0 start address Low Byte (See section 7.8) |
| 00A3 h | 059F h | Memory block con/uniFB01guration        | Memory block 0 start address High Byte                  |
| 00A4 h | 05A0 h | Memory block con/uniFB01guration        | Memory block 1 start address Low Byte                   |
| 00A5 h | 05A1 h | Memory block con/uniFB01guration        | Memory block 1 start address High Byte                  |
| 00A6 h | 05A2 h | MFC register con/uniFB01guration        | ENC_MODE (W)                                            |
| 00A7 h | 05A3 h | MFC register con/uniFB01guration        | ENC_STATUS (R)                                          |

<!-- image -->

00A8

05A4

MFC register con/uniFB01guration

X\_ENC (W)

| h      | h      |                                  |                       |
|--------|--------|----------------------------------|-----------------------|
| 00A9 h | 05A5 h | MFC register con/uniFB01guration | X_ENC (R)             |
| 00AA h | 05A6 h | MFC register con/uniFB01guration | ENC_CONST (W)         |
| 00AB h | 05A7 h | MFC register con/uniFB01guration | ENC_LATCH (R)         |
| 00AC h | 05A8 h | MFC register con/uniFB01guration | SPI_RX_DATA (R)       |
| 00AD h | 05A9 h | MFC register con/uniFB01guration | SPI_TX_DATA (W)       |
| 00AE h | 05AA h | MFC register con/uniFB01guration | SPI_CONF (W)          |
| 00AF h | 05AB h | MFC register con/uniFB01guration | SPI_STATUS (R)        |
| 00B0 h | 05AC h | MFC register con/uniFB01guration | SPI_LENGTH (W)        |
| 00B1 h | 05AD h | MFC register con/uniFB01guration | SPI_TIME (W)          |
| 00B2 h | 05AE h | MFC register con/uniFB01guration | I2C_TIMEBASE (W)      |
| 00B3 h | 05AF h | MFC register con/uniFB01guration | I2C_CONTROL (W)       |
| 00B4 h | 05B0 h | MFC register con/uniFB01guration | I2C_STATUS (R)        |
| 00B5 h | 05B1 h | MFC register con/uniFB01guration | I2C_ADDRESS (W)       |
| 00B6 h | 05B2 h | MFC register con/uniFB01guration | I2C_DATA_R (R)        |
| 00B7 h | 05B3 h | MFC register con/uniFB01guration | I2C_DATA_W (W)        |
| 00B8 h | 05B4 h | MFC register con/uniFB01guration | SD_CH0_STEPRATE (W)   |
| 00B9 h | 05B5 h | MFC register con/uniFB01guration | SD_CH1_STEPRATE (W)   |
| 00BA h | 05B6 h | MFC register con/uniFB01guration | SD_CH2_STEPRATE (W)   |
| 00BB h | 05B7 h | MFC register con/uniFB01guration | SD_CH0_STEPCOUNT (R)  |
| 00BC h | 05B8 h | MFC register con/uniFB01guration | SD_CH1_STEPCOUNT (R)  |
| 00BD h | 05B9 h | MFC register con/uniFB01guration | SD_CH2_STEPCOUNT (R)  |
| 00BE h | 05BA h | MFC register con/uniFB01guration | SD_CH0_STEPTARGET (W) |
| 00BF h | 05BB h | MFC register con/uniFB01guration | SD_CH1_STEPTARGET (W) |
| 00C0 h | 05BC h | MFC register con/uniFB01guration | SD_CH2_STEPTARGET (W) |
| 00C1 h | 05BD h | MFC register con/uniFB01guration | SD_CH0_COMPARE (W)    |
| 00C2 h | 05BE h | MFC register con/uniFB01guration | SD_CH1_COMPARE (W)    |
| 00C3 h | 05BF h | MFC register con/uniFB01guration | SD_CH2_COMPARE (W)    |
| 00C4 h | 05C0 h | MFC register con/uniFB01guration | SD_CH0_NEXTSR (W)     |
| 00C5 h | 05C1 h | MFC register con/uniFB01guration | SD_CH1_NEXTSR (W)     |
| 00C6 h | 05C2 h | MFC register con/uniFB01guration | SD_CH2_NEXTSR (W)     |
| 00C7 h | 05C3 h | MFC register con/uniFB01guration | SD_STEPLENGTH (W)     |
| 00C8 h | 05C4 h | MFC register con/uniFB01guration | SD_DELAY (W)          |

<!-- image -->

00C9

05C5

MFC register con/uniFB01guration

| h      | h      |                                  |                           |
|--------|--------|----------------------------------|---------------------------|
| 00CA h | 05C6 h | MFC register con/uniFB01guration | PWM_CFG (W)               |
| 00CB h | 05C7 h | MFC register con/uniFB01guration | PWM1 (W)                  |
| 00CC h | 05C8 h | MFC register con/uniFB01guration | PWM2 (W)                  |
| 00CD h | 05C9 h | MFC register con/uniFB01guration | PWM3 (W)                  |
| 00CE h | 05CA h | MFC register con/uniFB01guration | PWM4 (W)                  |
| 00CF h | 05CB h | MFC register con/uniFB01guration | PWM1_CNTRSHFT (W)         |
| 00D0 h | 05CC h | MFC register con/uniFB01guration | PWM2_CNTRSHFT (W)         |
| 00D1 h | 05CD h | MFC register con/uniFB01guration | PWM3_CNTRSHFT (W)         |
| 00D2 h | 05CE h | MFC register con/uniFB01guration | PWM4_CNTRSHFT (W)         |
| 00D3 h | 05CF h | MFC register con/uniFB01guration | PWM_PULSE_B_PULSE_A (W)   |
| 00D4 h | 05D0 h | MFC register con/uniFB01guration | PWM_PULSE_LENGTH (W)      |
| 00D5 h | 05D1 h | MFC register con/uniFB01guration | GPO (W)                   |
| 00D6 h | 05D2 h | MFC register con/uniFB01guration | GPI (R)                   |
| 00D7 h | 05D3 h | MFC register con/uniFB01guration | GPIO_CONFIG (W)           |
| 00D8 h | 05D4 h | MFC register con/uniFB01guration | DAC_VAL (W)               |
| 00D9 h | 05D5 h | MFC register con/uniFB01guration | MFCIO_IRQ_CFG (W)         |
| 00DA h | 05D6 h | MFC register con/uniFB01guration | MFCIO_IRQ_FLAGS (R)       |
| 00DB h | 05D7 h | MFC register con/uniFB01guration | WD_TIME (W)               |
| 00DC h | 05D8 h | MFC register con/uniFB01guration | WD_CFG (W)                |
| 00DD h | 05D9 h | MFC register con/uniFB01guration | WD_OUT_MASK_POL (W)       |
| 00DE h | 05DA h | MFC register con/uniFB01guration | WD_OE_POL (W)             |
| 00DF h | 05DB h | MFC register con/uniFB01guration | WD_IN_MASK_POL (W)        |
| 00E0 h | 05DC h | MFC register con/uniFB01guration | WD_MAX (R)                |
| 00E1 h | 05DD h | MFC register con/uniFB01guration | HV_ANA_STATUS (R)         |
| 00E2 h | 05DE h | Unused                           | Unused                    |
| 00E3 h | 05DF h | Unused                           | Unused                    |
| 00E4 h | 05E0 h | Unused                           | Unused                    |
| 00E5 h | 05E1 h | MFC register con/uniFB01guration | SYNC1_SYNC0_EVENT_CNT (R) |

SD\_CFG (W)

Table 189: EEPROM Parameter Map

<!-- image -->

## 7.5 SII EEPROM MFC IO Crossbar Mapping

The 24 MFC IO pins (16x Low Voltage 3.3V MFC IO pins and 8x High Voltage MFC IO pins) of the TMC8462A can be freely assigned to any signal coming from or going to the MFC IO functional blocks. Without initialization from the SII EEPROM on power up or later via PDI SPI/ECAT memory access during operation, all IOs are tri-stated.

The TMC8462A contains a full crossbar.

Note

Certain output signals (e.g. PWM signals, DAC, ...) generate very short pulses (down to 10ns) which are faster than the slew rate of the HVIO output drivers. It is still possible to use this con/uniFB01guration, so that the user can evaluate if the application speci/uniFB01c conditions allow to work directly with the HVIO outputs. Otherwise external signal conditioning is required.

One output signal can be mapped to multiple IO pins, for example to combine the driver strength of multiple pins. The con/uniFB01guration also allows a mapping of multiple pins to one input signal, but usually there is no reason for this con/uniFB01guration. When multiple pins are mapped to the same input signal, a logical OR operation is applied to all input pins.

- MFCIO00 to MFCIO15: SII EEPROM 0084 h to 0093 h / ESC Parameter RAM from 0580 h to 058F h

Each IO pin has a dedicated con/uniFB01guration byte in the SII EEPROM and in the ESC's memory space within the ESC Parameter RAM to select the functional MFC IO block signal connected to the physical IO pin:

- MFC\_HV0 to MFC\_HV7 2 : SII EEPROM: 0094 h to 009B h / ESC Parameter RAM from 0590 h to 0597 h

An overview over all con/uniFB01gurable MFC IO block signals is given in Table 190.

Name

Function block

Description

2 MFC\_HV0 to MFC\_HV7 ≡ MFCIO16 to MFCIO23

Direction

Value dec.

Value

|      |             |                                         |        |    | hex.   |
|------|-------------|-----------------------------------------|--------|----|--------|
| ZERO | none        | Disabled                                | -      |  0 | 00 h   |
| LOW  | none        | Static LOW output                       | output |  1 | 01 h   |
| HGH  | none        | Static HIGH output                      | output |  2 | 02 h   |
| TRI  | none        | Static tristate (Z) output              | -      |  3 | 03 h   |
| A    | ABN decoder | ABN_A signal                            | input  |  4 | 04 h   |
| An   | ABN decoder | ABN_An signal (for differential inputs) | input  |  5 | 05 h   |
| B    | ABN decoder | ABN_B signal                            | input  |  6 | 06 h   |
| Bn   | ABN decoder | ABN_Bn signal (for differential inputs) | input  |  7 | 07 h   |
| N    | ABN decoder | ABN_N signal                            | input  |  8 | 08 h   |
| Nn   | ABN decoder | ABN_Nn signal (for differential inputs) | input  |  9 | 09 h   |
| SCK  | SPI         | SPI SCK signal                          | output | 10 | 0A h   |
| SDI  | SPI         | SPI SDI signal                          | input  | 11 | 0B h   |
| SDO  | SPI         | SPI SDO signal                          | output | 12 | 0C h   |
| CS0  | SPI         | SPI CS0 signal                          | output | 13 | 0D h   |

<!-- image -->

CS1

SPI

SPI CS1 signal output

14

0E

|          |                |                                     |        |    | h    |
|----------|----------------|-------------------------------------|--------|----|------|
| CS2      | SPI            | SPI CS2 signal                      | output | 15 | 0F h |
| CS3      | SPI            | SPI CS3 signal                      | output | 16 | 10 h |
| SCL      | I 2 C          | I 2 C SCL signal                    | output | 17 | 11 h |
| SDA      | I 2 C          | I 2 C SDA signal                    | in/out | 18 | 12 h |
| S0       | Step/Direction | Step output channel 0               | output | 19 | 13 h |
| D0       | Step/Direction | Direction output channel 0          | output | 20 | 14 h |
| S1       | Step/Direction | Step output channel 1               | output | 21 | 15 h |
| D1       | Step/Direction | Direction output channel 1          | output | 22 | 16 h |
| S2       | Step/Direction | Step output channel 2               | output | 23 | 17 h |
| D2       | Step/Direction | Direction output channel 2          | output | 24 | 18 h |
| S0n      | Step/Direction | Inverted Step output channel 0      | output | 25 | 19 h |
| D0n      | Step/Direction | Inverted Direction output channel 0 | output | 26 | 1A h |
| S1n      | Step/Direction | Inverted Step output channel 1      | output | 27 | 1B h |
| D1n      | Step/Direction | Inverted Direction output channel 1 | output | 28 | 1C h |
| S2n      | Step/Direction | Inverted Step output channel 2      | output | 29 | 1D h |
| D2n      | Step/Direction | Inverted Direction output channel 2 | output | 30 | 1E h |
| HS0      | PWM            | Channel 0 Highside signal           | output | 31 | 1F h |
| LS0      | PWM            | Channel 0 Lowside signal            | output | 32 | 20 h |
| HS1      | PWM            | Channel 1 Highside signal           | output | 33 | 21 h |
| LS1      | PWM            | Channel 1 Lowside signal            | output | 34 | 22 h |
| HS2      | PWM            | Channel 2 Highside signal           | output | 35 | 23 h |
| LS2      | PWM            | Channel 2 Lowside signal            | output | 36 | 24 h |
| HS3      | PWM            | Channel 3 Highside signal           | output | 37 | 25 h |
| LS3      | PWM            | Channel 3 Lowside signal            | output | 38 | 26 h |
| PULSE_A  | PWM            | PWMcounter position A pulse         | output | 72 | 48 h |
| PULSE_C  | PWM            | PWMcounter center position pulse    | output | 73 | 49 h |
| PULSE_B  | PWM            | PWMcounter position B pulse         | output | 74 | 4A h |
| PULSE_AB | PWM            | PWMcounter position A and B pulses  | output | 75 | 4B h |
| PULSE_Z  | PWM            | PWMcounter Zero position pulse      | output | 76 | 4C h |
| GPI0     | GPIO           | General purpose input 0 signal      | input  | 39 | 27 h |
| GPI1     | GPIO           | General purpose input 1 signal      | input  | 40 | 28 h |
| GPI2     | GPIO           | General purpose input 2 signal      | input  | 41 | 29 h |

<!-- image -->

GPI3

GPIO

General purpose input 3 signal

Table 190: Crossbar con/uniFB01guration values

|       |      |                                  |        |    | h    |
|-------|------|----------------------------------|--------|----|------|
| GPI4  | GPIO | General purpose input 4 signal   | input  | 43 | 2B h |
| GPI5  | GPIO | General purpose input 5 signal   | input  | 44 | 2C h |
| GPI6  | GPIO | General purpose input 6 signal   | input  | 45 | 2D h |
| GPI7  | GPIO | General purpose input 7 signal   | input  | 46 | 2E h |
| GPI8  | GPIO | General purpose input 8 signal   | input  | 47 | 2F h |
| GPI9  | GPIO | General purpose input 9 signal   | input  | 48 | 30 h |
| GPI10 | GPIO | General purpose input 10 signal  | input  | 49 | 31 h |
| GPI11 | GPIO | General purpose input 11 signal  | input  | 50 | 32 h |
| GPI12 | GPIO | General purpose input 12 signal  | input  | 51 | 33 h |
| GPI13 | GPIO | General purpose input 13 signal  | input  | 52 | 34 h |
| GPI14 | GPIO | General purpose input 14 signal  | input  | 53 | 35 h |
| GPI15 | GPIO | General purpose input 15 signal  | input  | 54 | 36 h |
| GPO0  | GPIO | General purpose output 0 signal  | output | 55 | 37 h |
| GPO1  | GPIO | General purpose output 1 signal  | output | 56 | 38 h |
| GPO2  | GPIO | General purpose output 2 signal  | output | 57 | 39 h |
| GPO3  | GPIO | General purpose output 3 signal  | output | 58 | 3A h |
| GPO4  | GPIO | General purpose output 4 signal  | output | 59 | 3B h |
| GPO5  | GPIO | General purpose output 5 signal  | output | 60 | 3C h |
| GPO6  | GPIO | General purpose output 6 signal  | output | 61 | 3D h |
| GPO7  | GPIO | General purpose output 7 signal  | output | 62 | 3E h |
| GPO8  | GPIO | General purpose output 8 signal  | output | 63 | 3F h |
| GPO9  | GPIO | General purpose output 9 signal  | output | 64 | 40 h |
| GPO10 | GPIO | General purpose output 10 signal | output | 65 | 41 h |
| GPO11 | GPIO | General purpose output 11 signal | output | 66 | 42 h |
| GPO12 | GPIO | General purpose output 12 signal | output | 67 | 43 h |
| GPO13 | GPIO | General purpose output 13 signal | output | 68 | 44 h |
| GPO14 | GPIO | General purpose output 14 signal | output | 69 | 45 h |
| GPO15 | GPIO | General purpose output 15 signal | output | 70 | 46 h |
| DAC0  | DAC  | Pseudorandom 1-bit DAC signal    | output | 71 | 47 h |

The following Figure 32 shows the crossbar with an example con/uniFB01guration. All input signals to the MFC IO Incremental Encoder Block are connected via external pins. In this case the /uniFB01rst 6 low voltage MFC IOs are

<!-- image -->

input

42

2A

used as inputs. No other functional MFC IO block is used in this example. The curly braces behind each MFC IO number contain the required con/uniFB01guration value in decimal numbers according to Table 190.

<!-- image -->

MFC IO Block

Figure 32: MFC IO Crossbar Example Con/uniFB01guration

<!-- image -->

## 7.6 SII EEPROM MFC IO High Voltage IO (HVIO) Con/uniFB01guration

The /uniFB01rst three con/uniFB01guration bytes (Slope Slow, Weak High, Weak Low) each have one bit corresponding to one HV output:

The 8 HVIO pins have additional con/uniFB01guration options which can be set on power up from the SII EEPROM or later by SPI access to the memory.

Bit

Output

Table 191: Slope Slow/Weak High/WeakLow con/uniFB01g

|   0 | MFC_HV0   |
|-----|-----------|
|   1 | MFC_HV1   |
|   2 | MFC_HV2   |
|   3 | MFC_HV3   |
|   4 | MFC_HV4   |
|   5 | MFC_HV5   |
|   6 | MFC_HV6   |
|   7 | MFC_HV7   |

## Slope Slow - 0598 h (SII EEPROM: 009C h )

With this option set to 1, the high level driver strength of the HVIO pins can be reduced. Weak Low - 059A h (SII EEPROM: 009E h )

With this option set to 1, the output slope of the HVIO pins can be slowed down.

Weak High - 0599 h (SII EEPROM: 009D h )

With this option set to 1, the low level driver strength of the HVIO pins can be reduced.

## Differential Input Enable - 059B h (SII EEPROM: 009F h )

Bit

Positive input

Negative input

With this option set to 1, two of the HVIO inputs can be combined to a differential input pair. Only the lower 4 bits are used to enable four speci/uniFB01c pairs:

Table 192: Differential HV input con/uniFB01guration

|   0 | MFC_HV3   | MFC_HV0   |
|-----|-----------|-----------|
|   1 | MFC_HV4   | MFC_HV1   |
|   2 | MFC_HV5   | MFC_HV2   |
|   3 | MFC_HV7   | MFC_HV6   |

The crossbar settings of MFC\_HV3, MFC\_HV4, MFC\_HV5 and MFC\_HV7 are ignored when they are used as a differential input.

<!-- image -->

## 7.7 SII EEPROM MFC IO Switching Regulator Con/uniFB01guration

## 3.3V switching regulator - 059C h (SII EEPROM: 00A0 h )

Bit

Output

Table 193: Con/uniFB01guration bits for 3.3V switching regulator

| 1:0   | SAW_FREQ - Switching frequency (nominal values) 0 : 250kHz 1 : 125kHz 2 : 500kHz 3 : 1MHz           |
|-------|-----------------------------------------------------------------------------------------------------|
| 3:2   | FB_AMPL - Voltage error feedback ampli/uniFB01cation 0 : 100% 1 : 150% 2 : 200% 3 : 50%             |
| 5:4   | FB_CAP - Dampening of voltage error feedback 0 : 100% 1 : 150% 2 : 200% 3 : 50%                     |
| 6     | SC_DISABLE - Disable cycle-to-cycle overcurrent protection 0 : Protection enabled 1 : No protection |

## Adjustable switching regulator - 059D h (SII EEPROM: 00A1 h )

Bit

Output

| 1:0   | SAW_FREQ - Switching frequency (nominal values) 0 : 250kHz 1 : 125kHz 2 : 500kHz 3 : 1MHz           |
|-------|-----------------------------------------------------------------------------------------------------|
| 3:2   | FB_AMPL - Voltage error feedback ampli/uniFB01cation 0 : 100% 1 : 150% 2 : 200% 3 : 50%             |
| 5:4   | FB_CAP - Dampening of voltage error feedback 0 : 100% 1 : 150% 2 : 200% 3 : 50%                     |
| 6     | SC_DISABLE - Disable cycle-to-cycle overcurrent protection 0 : Protection enabled 1 : No protection |

<!-- image -->

Bit

Output

| 7   | DISABLE - Disable Switching regulator 0 : Switching regulator enabled 1 : Switching regulator disabled   |
|-----|----------------------------------------------------------------------------------------------------------|

Table 194: Con/uniFB01guration bits for adjustable switching regulator

<!-- image -->

## 7.8 SII EEPROM MFC IO Memory Block Mapping

- Memory Block 0 is used for write-registers (data direction: EtherCAT master -&gt; MFC register)

The MFC registers can be mapped to speci/uniFB01c PDRAM memory areas to allow EtherCAT access (= accessible by the EtherCAT master), such that data is directly mirrored between each MFC register and the assigned PDRAM memory location. This allows the operation with a less powerful application processor or even without an application processor at all in Device Emulation mode. The registers are dynamically mapped to one of two memory blocks:

- Memory Block 1 is used for read-registers (data direction: MFC register -&gt; EtherCAT master).

The lengths of the two memory blocks depend on the selected registers that are mapped into the PDRAM. Extra care should be taken that the blocks do not overlap each other, that they do not overlap with other process data in the DPRAM, and that the memory blocks' start addresses are not too close at 4FFF h .

The start address of each memory block can be con/uniFB01gured to be anywhere in the PDRAM area (1000 h to (4FFF h -blocksize)).

## Memory Block 0 base address 059F h :059E h (SII EEPROM: 00A3 h :00A2 h )

Address 059E h contains the lower byte of the start address. Allowed values: 00 h ...FF h Memory Block 1 base address 05A1 h :05A0 h (SII EEPROM: 00A5 h :00A4 h )

The start address of the block that all write registers of the MFC are mapped into. Address 059F h contains the upper byte of the start address. Allowed values: 10 h ...4F h

The start address of the block that all read registers of the MFC are mapped into. Address 059F h contains the upper byte of the start address. Allowed values: 10 h ...4F h Address 059E h contains the lower byte of the start address. Allowed values: 00 h ...FF h

When a register is mapped to the PDRAM its memory address depends on the other enabled registers with a lower register number.

MFC registers are mapped in a de/uniFB01ned order into the PDRAM.

The start address of any enabled register will be a multiple of 4 bytes from the start address of the memory block.

These gaps must be /uniFB01lled up with padding bytes.

Between registers that are not a multiple of 4 bytes, a gap is left that is not transferred from the MFC IO block to the ESC RAM.

Example: if a 2-byte register, an 8-byte register, a 1-byte register, and a 4-byte register are enabled in a memory block starting at 2000 h , the memory is used as shown in the following table:

NO padding is needed if the last register ends at an address not equal to a multiple of 4 bytes. This is especially required when using a Sync Manager on top of the memory manager address range in the ESC RAM. Otherwise, the Sync Manager will not trigger since the last byte is never actually written.

Register

End Address

Start Address

| Reg. 1 (2 byte)   | 2001 h   | 2000 h   |
|-------------------|----------|----------|
| Padding           | 2003 h   | 2002 h   |
| Reg. 2 (8 byte)   | 200B h   | 2004 h   |
| Reg. 3 (1 byte)   | 200C h   | 200C h   |
| Padding           | 200F h   | 200D h   |
| Reg. 4 (4 byte)   | 2013 h   | 2010 h   |

Table 195: Register mapping example

<!-- image -->

For the actual register sizes please refer to Table 124 in Section 7.2.

## 7.8.1 Sync Manager Con/uniFB01guration and Memory Blocks

The base length of the Sync Manager is the size of the memory manager address range including the padding bytes.

Sync Managers can be used and con/uniFB01gured on top of the memory managers for read (inputs) and write registers (outputs).

For the example given in the table above the Sync Manager would have 6 PDOs and a size of 20 bytes. Again, NO padding is needed if the last register ends at an address not equal to a multiple of 4 bytes. This is especially required when using a Sync Manager on top of the memory manager address range in the ESC RAM. Otherwise, the Sync Manager will not trigger since the last byte is never actually written.

<!-- image -->

## 7.9 SII EEPROM MFC IO Register Con/uniFB01guration

The transfer of all enabled registers is performed in one access. To enable the data update at certain times only, a shadow register is used for every MFC register. The exact point in time when the actual data transfer occurs (from the shadow register into a write register or from a read register into the shadow register) is based on the chosen trigger source.

All MFC registers are accessible via the MFC IO Control SPI Interface. Alternatively they can be mapped into the ESC's Process Data RAM to allow access via EtherCAT. In this case the mapped registers can only be written by the EtherCAT master. But they can still be read via MFC IO Control SPI Interface.

There is one con/uniFB01guration byte in the SII EEPROM (and ESC Parameter RAM respectively) for each MFC block register. The con/uniFB01guration for all registers has the same options:

Bit

Trigger

Description

Table 196: Register con/uniFB01guration byte

| 3:0   | Trigger Source                                                                                                                                                       |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 4     | Enable RAM transfer 0 : disabled , register access only from MCU via MFC CTRL SPI 1 : enabled , read and write access via EtherCAT, readable by MCU via MFC CTRL SPI |
| 7:5   | Unused                                                                                                                                                               |

Trigger Source Name

Description

| Source hex.   |                                    |                                                    |
|---------------|------------------------------------|----------------------------------------------------|
| 0 h           | Trigger always                     | shadow register is transparent                     |
| 1 h           | SYNC0 signal                       | distributed clocks sync pulse 0 (0->1)             |
| 2 h           | SYNC1 signal                       | distributed clocks sync pulse 1 (0->1)             |
| 3 h           | LATCH0 signal                      | distributed clocks latch input 0 (0->1)            |
| 4 h           | LATCH1 signal                      | distributed clocks latch input 1 (0->1)            |
| 5 h           | EtherCAT start of frame (SOF)      | Start of frame on EtherCAT bus                     |
| 6 h           | EtherCAT end of frame (EOF)        | End of frame on EtherCAT bus                       |
| 7 h           | PDI SPI nCS=0 (Chip Select)        | Falling edge on PDI_SPI_CSN pin                    |
| 8 h           | PDI SPI nCS=1 (Chip Deselect)      | Rising edge on PDI_SPI_CSN pin                     |
| 9 h           | MFC SPI nCS=0 (Chip Select)        | Falling edge on MFC_CTRL_SPI_CSN pin               |
| A h           | MFC SPI nCS=1 (Chip Deselect)      | Rising edge on MFC_CTRL_SPI_CSN pin                |
| B h           | Trigger before register is handled | Before data is copied to/from RAM by Memory Bridge |
| C h           | Trigger after register was handled | After data is copied to/from RAM by Memory Bridge  |
| D h           | Trigger on PWMcounter = 0          | Transfer at the zero pulse of the MFC PWMunit      |
| E h           | Trigger never                      | no data is transferred, can be used for debugging  |
| F h           | Trigger always                     | shadow register is transparent                     |

<!-- image -->

Trigger

Trigger Source Name

| Source hex.   |
|---------------|

Description

Table 197: Trigger source descriptions

<!-- image -->

## 7.10 MFC IO ESI/XML Con/uniFB01guration Block

Another way to con/uniFB01gure the MFC IO block is to directly write via PDI or ECAT interface to the EtherCAT registers at 0x0580 to 0x05E1 (ESC Parameter RAM).

This example shows the part of the ESI/XML con/uniFB01guration /uniFB01le for EtherCAT slaves used to con/uniFB01gure the MCF IO block directly out of the EEPROM (at power-up or reset). Therefore, the con/uniFB01guration block must be classi/uniFB01ed as category 1 information within the EEPROM.

Aneasy way to generate the con/uniFB01guration data string that is used in this XML structure is to use the wizard included in the TMCL-IDE. See also section ESI Con/uniFB01guration Wizard.

```
1 <Eeprom> <ByteSize>2048</ByteSize> 3 <!--Mandatory configuration bytes according to EtherCAT standard--> 5 ConfigData >0000000000000000000...</ConfigData> 7 <!--MFC IO Configuration vector must be of category 1.--> <!--It will be loaded into registers 0x0580...0x05E1 --> 9 <!--during EEPROM loading at startup. --> <Category> 11 <CatNo>1</CatNo> <Data>00000000000000000000000000000000000000000000000 13 00000000000000000000000000000000000000000000000 00000000000000000000000000000000000000000000000 15 00000000000000000000000000000000000000000000000 00000000 17 </Data> </Category> 19 </Eeprom>
```

Figure 33: MFC IO ESI/XML Con/uniFB01guration Block

The zeros in the example above are just placeholders and must be adapted to the respective con/uniFB01guration.

See the available application notes and examples on www.trinamic.com for more information.

<!-- image -->

Note

## 7.11 MFC IO Incremental Encoder Block

This function block provides input pins for incremental encoder signals (two quadrature signals and one index signal) with differential option. It has a large range of resolution settings, allowing the use of many different encoders without requiring extra calculations.

<!-- image -->

MFC IO Block

Figure 34: MFC IO Incremental Encoder Unit

EncoderBlockCon/uniFB01guration Con/uniFB01guration of the Incremental Encoder Block is done via the ENC\_MODE register. Polarities, index event handling, clear and latch options, and prescaler mode can be con/uniFB01gured.

N Event Flag The LSB in the ENC\_STATUS register shows that an N event has occurred since the last read access to this register. The /uniFB02ag is cleared on a read access.

EncoderConstant TheencoderconstantENC\_CONSTisaddedtoorsubtractedfromtheencodercounter on each polarity change of the quadrature signals AB of the incremental encoder. The encoder constant ENC\_CONST represents a signed /uniFB01xed point number (16.16) to facilitate the generic adaption between motors and encoders. In decimal mode, the lower 16 bits represent a number between 0 and 9999. For stepper motors equipped with incremental encoders the /uniFB01xed number representation allows very comfortable parametrization. Additionally, mechanical gearing can easily be taken into account. Negating the sign of ENC\_CONST allows inversion of the counting direction to match motor and encoder direction. The encoder constant can be con/uniFB01gured in the ENC\_CONST register. Examples:

- Encoder factor of -1.0: ENC\_CONST = 0xFFFF.0x0000 This is the two's complement of 0x00010000. It equals (2 16 -(FACTOR+1)).(2 16 -FRACTION)
- Encoder factor of 1.0: ENC\_CONST = 0x0001.0x0000 = FACTOR.FRACTION
- Decimal mode encoder factor 25.6: ENC\_CONST = 00025.6000 = 0x0019.0x1770 = FACTOR.DECIMALS
- Decimal mode encoder factor -25.6: ENC\_CONST = 0xFFE6.4000 = 0xFFE6.0x0FAO. This equals (2 16 -(FACTOR+1)).(10000-DECIMALS)

<!-- image -->

Encoder Position The encoder counter ENC\_X holds the current encoder position ready for read out. Different modes concerning handling of the signals A, B, and N take into account active low and active high signals as found with different types of encoders.

The encoder position can also be overwritten and set to a speci/uniFB01c value. The current encoder position can be written to MFC IO register 2.

The current encoder position can be read from MFC IO register 3.

Latched Encoder Position When either clr\_cont or clr\_once are set in the ENC\_MODE register, the current encoder position from ENC\_X is latched into MFC IO register 5 on an active N event.

<!-- image -->

## 7.12 MFC IO SPI Master Block

The SPI Master Unit provides an interface for up to four SPI slaves with a theoretically unlimited datagram length using multiple accesses.

<!-- image -->

MFC IO Block

Figure 35: Block structure of SPI Master Unit

The basic con/uniFB01guration requires setting the SPI frequency/bit length, the datagram length and the SPI mode (clock polarity and phase). Extended settings are a special start-of-transmission trigger linked to the PWM unit, the bit order, selection of one of the four SPI slaves and datagram length extension.

SPI\_TX\_DATA - Data to transmit The data to be sent is written to this register. Unless con/uniFB01gured differ-

SPI\_RX\_DATA - Received Data This register contains the received datagram after an SPI transfer. For SPI transfers with less than 64 bit, the upper bits of this register are unused.

ently in SPI\_CONF Bits 10..8, writing to this register starts the SPI transfer. For SPI transfers with less than 64 bit, the upper bits of this register are unused.

- Bit 15 is the trigger bit that can be selected as transmission start trigger (see below).

## SPI\_CONF - SPI block con/uniFB01guration

- Bits 10..8 allow a con/uniFB01guration when the data transmission should start, they are interpreted as a 3 bit number:
- -The settings 1 to 5 link the start of the transmission to the PWM unit, allowing synchronization between the PWM cycle and for example a SPI ADC for current measurement. The trigger sources are the /uniFB01ve PWM\_PULSE signals that are also available on the MFCIO crossbar. Please refer to Section 7.15 for details about these pulses.
- -In the reset con/uniFB01guration 0, the transmission always starts when data is written to the SPI\_TX register.
- -Setting 7 is a single shot trigger that starts only one transmission when Bit 15 of SPI\_CONF is written to 1.
- Bit 6 and 5 de/uniFB01ne the clock polarity and phase of the SPI signals which de/uniFB01ne what the idle state of the SCK signal is and when output data is changed and when input data is sampled.

<!-- image -->

Clock polarity

Clock phase

SPI mode

MOSI change

Table 198: SPI mode con/uniFB01guration

|   0 |   0 |   0 | SCK falling edge   | SCK rising edge   |
|-----|-----|-----|--------------------|-------------------|
|   0 |   1 |   1 | SCK rising edge    | SCK falling edge  |
|   1 |   0 |   2 | SCK rising edge    | SCK falling edge  |
|   1 |   1 |   3 | SCK falling edge   | SCK rising edge   |

- Bit 4 reverses the bit order in the transmission, the least signi/uniFB01cant bit of SPI\_TX\_DATA (Bit 0) is transmitted /uniFB01rst, the least signi/uniFB01cant bit of SPI\_RX\_DATA is the /uniFB01rst received bit, the most signi/uniFB01cant bit of SPI\_TX\_DATA is transmitted last and the most signi/uniFB01cant bit of SPI\_RX\_DATA is the last bit received.
- Bits 1 and 0 de/uniFB01ne which chip select line (which slave) is used for the next transmission.
- Bit 3 can be used for datagrams longer than 64 bit. With this bit set, the chip select line is held low after the transmission, allowing more transmissions in the same datagram. Before the last transmission, this bit must be set to 0 again so that the chip select line goes high afterwards, ending the datagram.

SPI\_STATUS - SPI transfer status Bit 0 of this register is the Ready indicator for the SPI master unit. When this bit is set, a new transfer can be started. When this bit is 0 and the start of a new transfer is triggered, the trigger is ignored, the currently active transfer is /uniFB01nished but the new transfer is not started.

SPI datagram length (bits) = SPI\_LENGTH+1

SPI\_LENGTH - SPI datagram length This register de/uniFB01nes the SPI datagram length in bits. Any length from 1 to 64 bits is possible.

SPI\_TIME - SPI bit duration This register de/uniFB01nes the bit length and thus the SPI clock frequency. ThedurationofoneSPIclockcyclecanbecalculatedast SCK =(4+(2*SPI\_TIME))/25MHz = (4+(2*SPI\_TIME))*40ns, the SPI clock frequency is f SCK = 25MHz/(4+(2*SPI\_TIME)).

The delay between the falling edge of CSN (becoming active) and the /uniFB01rst SCK edge and the last SCK edge and the rising edge of CSN is always a half SCK clock cycle (t SCK /2).

## 7.12.1 SPI Examples

This example shows the con/uniFB01guration of the SPI master unit for a TMC262 as SPI slave 0 and the transfer of data to the TMC262's DRVCONF register.

## TMC262 on SPI channel 0

1. Use 3.125 MHz SPI clock (25MHz/(4+(2*2))) = (25MHz/8) SPI\_TIME &lt;= 0x02

2. Use 20 bit datagrams SPI\_LENGTH &lt;= 0x13

3. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, single datagrams, Slave 0) SPI\_CONF &lt;= 0x0060

4. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

MISO sample

<!-- image -->

5. Write Data into TX register (e.g. TMC262 DRVCONF register, all 64bit are shown) SPI\_TX\_DATA &lt;= 0x00000000000EF010
7. Read Data from RX register rxdatagram = SPI\_RX\_DATA
6. Wait until SPI-Master is ready while (SPI\_STATUS &amp; 0x01 != 0x01)

## Chain of 10 74xx595 shift registers used as 80 digital outputs (good example)

It is recommended to split the data into two chunks of 40 bits each: 0x5555AAAA55 and 0x55AAAA55AA.

This example shows the transmission of a longer datagram, in this case 80 bits that are shifted into a chain of 74xx595 shift registers. The NCS of the SPI interface can be used as the storage clock of the 74xx595 to transfer the contents of the shift register into the storage register. The data that should be sent is 0x5555AAAA5555AAAA55AA.

## Con/uniFB01guration and /uniFB01rst transmission

2. Use a 40 bit datagram SPI\_LENGTH &lt;= 0x28
1. Use 6.25 MHz SPI clock (25MHz/(4+(2*0))) = (25MHz/4) SPI\_TIME &lt;= 0x00
3. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Keep CS low, Slave 0) SPI\_CONF &lt;= 0x0068
4. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

6. Wait until SPI-Master is ready
5. Write Data for the /uniFB01rst 64 outputs into TX register SPI\_TX\_DATA &lt;= 0x5555AAAA55

while (SPI\_STATUS &amp; 0x01 != 0x01)

8. Write Data for the last 16 outputs into TX register
7. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Drive CS high at the end, Slave 0) SPI\_CONF &lt;= 0x0060

SPI\_TX\_DATA

&lt;= 0x55AAAA55AA

9. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

## Next transmission with inverted data

1. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Keep CS low, Slave 0)

SPI\_CONF

&lt;= 0x0068

2. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

3. Write Data for the /uniFB01rst 40 outputs into TX register

SPI\_TX\_DATA &lt;= 0xAAAA5555AA

4. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

5. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Drive CS high at the end, Slave 0) SPI\_CONF &lt;= 0x0060

<!-- image -->

6. Write Data for the last 40 outputs into TX register SPI\_TX\_DATA &lt;= 0xAA5555AA55

## Chain of 10 74xx595 shift registers used as 80 digital outputs (bad example)

7. Wait until SPI-Master is ready while (SPI\_STATUS &amp; 0x01 != 0x01)

This bad example is the same as the previous one but with the non-recommended datagram split of 64 bits + 16 bit. This requires more communication since not only the SPI\_CONF register needs to be changed between the SPI\_TX\_DATA writes but also the SPI\_LENGTH register changes every time.

## Con/uniFB01guration and /uniFB01rst transmission

2. Use a 64 bit datagram
1. Use 6.25 MHz SPI clock (25MHz/(4+(2*0))) = (25MHz/4) SPI\_TIME &lt;= 0x00

SPI\_LENGTH &lt;= 0x3F

4. Wait until SPI-Master is ready while (SPI\_STATUS &amp; 0x01 != 0x01)
3. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Keep CS low, Slave 0) SPI\_CONF &lt;= 0x0068
5. Write Data for the /uniFB01rst 64 outputs into TX register SPI\_TX\_DATA &lt;= 0x5555AAAA5555AAAA
6. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

8. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Drive CS high at the end, Slave 0) SPI\_CONF &lt;= 0x0060
7. Use a 16 bit datagram (remaining outputs) SPI\_LENGTH &lt;= 0x0F
9. Write Data for the last 16 outputs into TX register

SPI\_TX\_DATA

&lt;= 0x55AA

10. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

## Next transmission with inverted data

- 1.
2. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Keep CS low, Slave 0)
- Use a 64 bit datagram SPI\_LENGTH &lt;= 0x3F

SPI\_CONF &lt;= 0x0068

4. Write Data for the /uniFB01rst 64 outputs into TX register SPI\_TX\_DATA &lt;= 0xAAAA5555AAAA5555
3. Wait until SPI-Master is ready while (SPI\_STATUS &amp; 0x01 != 0x01)
5. Wait until SPI-Master is ready

while (SPI\_STATUS &amp; 0x01 != 0x01)

<!-- image -->

6. Use a 16 bit datagram (remaining outputs) SPI\_LENGTH &lt;= 0x0F
8. Write Data for the last 16 outputs into TX register SPI\_TX\_DATA &lt;= 0xAA55
7. Start on TX write, SPI-Mode 3, MSB /uniFB01rst, Drive CS high at the end, Slave 0) SPI\_CONF &lt;= 0x0060
9. Wait until SPI-Master is ready while (SPI\_STATUS &amp; 0x01 != 0x01)

<!-- image -->

## 7.13 MFC IO I2C Master Block

The TMC8462A I2C master allows accessing I2C slaves by writing and reading control and data registers instead of needing to take care of timing or even bit-banging through the GPIO block.

<!-- image -->

MFC IO Block

Figure 36: Block structure of SPI Master Unit

## I2C\_TIMEBASE - Bit duration in µ s

## I2C\_CONTROL - Command register

This register determines the I2C clock frequency by setting the duration of a single bit. A setting of 0 disables communication, a setting of 1 results in bit duration of 1 µ s, the maximum setting of 255 results in a bit duration of 255 µ s.

There are 6 commands that allow full control of the I2C master block. Each command is represented by a single bit in this register.

Command byte

Bit in register

Command

Table 199: I2C control commands

| 0x20   |   5 | Send Start Condition (also Repeated Start)                 |
|--------|-----|------------------------------------------------------------|
| 0x10   |   4 | Send Stop Condition                                        |
| 0x08   |   3 | Send Address (Content of Address register), incl. R/nW Bit |
| 0x04   |   2 | Send Data (Content of Data register)                       |
| 0x02   |   1 | receive Data and send ACK                                  |
| 0x01   |   0 | receive Data and send NACK                                 |

The status bits show the current transmission status either alone or in a combination of multiple bits.

<!-- image -->

## I2C\_STATUS - Status register

Status bit

Description

Table 200: I2C status register bits

|   7 | Error Flag                    |
|-----|-------------------------------|
|   6 | Not Acknowledge received/sent |
|   5 | Acknowledge received/sent     |
|   4 | Write to slave mode           |
|   3 | Read from Slave mode          |
|   2 | Transmit Address mode         |
|   1 | Repeated Start condition sent |
|   0 | Start condition sent          |

Bits 0 and 1 are set after command 0x20 was successfully executed, either if the I2C bus was idle or a start condition already has been sent. A combination of Bits 2 to 6 indicates completion of an address or data cycle.

Bit 7 indicates an error during transmission. A stop condition should be sent to return to the idle state.

Status byte

Status

Table 201: I2C status overview

| 0x00   | Idle                |
|--------|---------------------|
| 0x01   | Start sent          |
| 0x02   | Repeated Start sent |
| 0x34   | Write Address ACK   |
| 0x2C   | Read Address ACK    |
| 0x54   | Write Address NACK  |
| 0x4C   | Read Address NACK   |
| 0xE4   | Address Error       |
| 0x48   | Read Data ACK sent  |
| 0x28   | Read Data NACK sent |
| 0x30   | Write Data ACK      |
| 0x50   | Write Data NACK     |
| 0xF0   | Write Data Error    |
| 0xFF   | General Error       |

## I2C\_ADDR - Address register with R/nW bit

This register contains the 7 bit address of the I2C slave and the single R(ead)/n(ot)W(rite) bit.

<!-- image -->

Bit

7

6

5

4

3

2

Table 202: I2C Addres register

| Function   | A6   | A5   | A4   | A3   | A2   | A1   | A0   | R/nW   |
|------------|------|------|------|------|------|------|------|--------|

## I2C\_DATA\_R - Data register for received data

The data byte that should be sent with the next write command is written to this register. Basic usage An usual communication cycle is done by the following steps

After a read command, this register contains the last read data byte.

## I2C\_DATA\_W - Data register for data to transmit

1. Set the bit duration in µ s in the I2C\_TIMEBASE register (only required as con/uniFB01guration after reset or if a different speed is required).
3. Write the slave address and the R/nW bit to the I2C\_ADDR register.
2. Write 0x20 (Send Start Condition) to the I2C\_CONTROL register.
4. Write 0x80 (Send Address) to the I2C\_CONTROL register.
- Write 0x01 (Receive Data and send NACK) or 0x02 (Receive Data and send ACK) to I2C\_CONTROL to receive data and send NACK or ACK.
5. Depending on the R/nW bit, either

or

- Read the data from the I2C\_DATA\_R register.
- Write data to the I2C\_DATA\_W register.

This can be repeated as long as it is necessary.

- Write 0x04 (Send Data)to I2C\_CONTROL to send the data.
6. Write 0x10 (Send Stop Condition) to the I2C\_CONTROL register.

A repeated start condition, as it is required for slaves like EEPROMs, can be sent like the regular start condition by writing 0x20 to the I2C\_CONTROL register at any required time.

## 7.13.1 I2C Example

This Example shows reading from an 24LC64 I2C EEPROM. The standard I2C address is con/uniFB01gurable from 0x50 to 0x57 with 3 address pins. The address 0x50 is used for this example. The memory uses 13 bit addresses, so two memory address bytes are used. The memory address 0x1234 is used for this example.

1. Set I2C clock to 100kHz (10 µ s)

I2C\_TIMEBASE &lt;= 0x0A

2. Send Start Condition

I2C\_CONTROL &lt;= 0x20

4. Send Address
3. Write the slave address and the nW bit ((0x50 « 1) + 0 = 0xA0) I2C\_ADDR &lt;= 0xA0

I2C\_CONTROL &lt;= 0x80

1

0

<!-- image -->

5. Write upper byte of the memory address

I2C\_DATA\_W &lt;= 0x12

6. Send Data

I2C\_CONTROL &lt;= 0x04

7. Write lower byte of the memory address

I2C\_DATA\_W &lt;= 0x34

9. Send Repeated-Start Condition
8. Send Data I2C\_CONTROL &lt;= 0x04

I2C\_CONTROL &lt;= 0x20

10. Write the slave address and the R bit ((0x50 « 1) + 1 = 0xA1)

I2C\_ADDR

&lt;= 0xA1

11. Command: Receive Data and send ACK

I2C\_CONTROL &lt;= 0x02

databyte &lt;= I2C\_DATA\_R The last two steps can be repeated as long as it is necessary, for the last byte send a NACK instead:

12. Read the data
13. Command: Receive Data and send NACK

I2C\_CONTROL &lt;= 0x01

14. Read the data

databyte &lt;= I2C\_DATA\_R

15. Write 0x10 (Send Stop Condition) to the I2C\_CONTROL register.

<!-- image -->

## 7.14 MFC IO Step and Direction Block

This is done by writing an accumulation constants to a register. Toggle of the MSB of the accumulation register value generates an internal step pulse of one internal clock cycle.

The MFC IO step &amp; direction block allows for generation of de/uniFB01ned step pulse frequencies along with a direction signal.

The direction signal is the MSB of the accumulation constant. Therefore, the sign of the accumulation constant de/uniFB01nes the direction signal polarity. The step-to-direction timer (STP2DIR) takes care of possible external signal delay paths by programmable delay of the /uniFB01rst step after write of accumulation constant. The pulse stretcher forms step and direction pulses of programmable length for adaption to external signal paths.

The step direction unit can either run in free running mode just generating step pulses with programmed frequency. Alternatively, is can generate a de/uniFB01ned number of step pulses with programmed frequency. An interrupt output signal IRQ TARGET\_REACHED indicates the reached target count of step pulses. TMC8462A has three independent step and direction channels.

<!-- image -->

## MFC IO Block

Figure 37: Block structure of the MFC IO Step and Direction Block

Step &amp; Direction Signal Timing Write to the accumulation constant register starts step pulse generation. The /uniFB01rst step pulse occurs after a time t STEP 1 st . Following step pulses come after each t STEP . The pulse length of the step pulses is t STEP \_ PULSE . On change of direction by writing the accumulation constant with a constant of different sign, the /uniFB01rst step pulse after write occurs after t STP 2 DIR .

<!-- image -->

Figure 38: Step &amp; Direction Signal Timing

<!-- image -->

Description / Function

Table 203: Step and direction unit parameters

| f CLK [Hz]         | 25 MHz   | clock frequency of step direction unit                                                                                                                                            | clock frequency of the step direction unit                                                                    |
|--------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| t CLK [s]          | 40 ns    | clock period length                                                                                                                                                               | t CLK = 1 /f CLK                                                                                              |
| f STEP [Hz]        |          | f STEP = ( f CLK / 2 32 ) ∗ ( SD _ CHx _ STEPRATE )                                                                                                                               | step frequency, pro- grammed via step rate accumulation constant SD_CHx_STEPRATE                              |
| Max. f STEP [Hz]   | 12.5 MHz |                                                                                                                                                                                   | Theoretical maximumvalue for f STEP . Usable step frequency depends on step pulse length con/uniFB01guration. |
| t STEP [s]         |          | t STEP = 1 /f STEP                                                                                                                                                                | time between steps                                                                                            |
| t STEP _ PULSE [s] |          | t STEP _ PULSE = ( SD _ STEP _ LENGTH +1) /f CLK                                                                                                                                  | step pulse length must be lower than time between step pulses! t STEP _ PULSE < t STEP                        |
| DIR                |          | DIR = 0 -> positive direction, DIR = 1 -> negative direction, direction is depending on sign of step rate register SD_CHx_STEPRATE where the step rate register is 2th complement | direction signal, depending of step rate (SR) parameter, DIR = 0 if SR > 0 or SR = 0, DIR = 1 if SR < 0       |
| t STEP 1 st [s]    |          | time to 1st step pulse since WR=0 with t STEP 1 st = 2 32 /SD _ CHx _ STEPRATE ∗ t CLK +( SD _ DELAY +1) ∗ t CLK +(2 ∗ t CLK )                                                    | Time between write until the /uniFB01rst step pulse occurs                                                    |
| t STEP 1 stWR [s]  |          | time to /uniFB01rst step pulse since WR=0 step de- lay plus 1 internal clock plus 2 clock cycles to pulse length                                                                  | Internal processing adds an delay                                                                             |

Parameter

Value

Comment

<!-- image -->

Step Rate Accumulation Constant Register SD\_CHx\_STEPRATE The step direction accumulation constant determines the time t STEP between two successive step pulses - this is actually the step rate. Each internal PWM clock accumulates an accumulator according to a = a + c with the accumulator constant c . Toggle of the MSB of the accumulator register a triggers a step pulse. With this principle, the step frequency is smarter adjustable compared to a simple frequency divider. Writing c = 0 clears the accumulator and stops the step pulse generation. The step pulse frequency calculates as f STEP = ( f CLK / 2 32 ) ∗ c .

Step Counter Register SD\_CHx\_STEPCOUNT The step counter counts the number of steps, taking the direction into account. This is a read only register. To reset this counter to zero set bit 4 in the SD\_CFG register.

Step Target Register SD\_CHx\_STEPTARGET The step target de/uniFB01nes the number of steps to be made when in target mode. See SD\_CFG register bit 2. This register can be overwritten at any time. When the number of steps has been made, the unit stops generating S/D pulses. When read, it gives the remaining numbers that must still be made.

Step Compare Register SD\_CHx\_COMPARE This register holds a compare value in numbers of step pulses.

Next Step Rate Register SD\_CHx\_NEXTSR The next step rate register contains a value of the same formatasthesteprateregister. This value is automatically written into the step rate register SD\_CHx\_STEPRATE after a successful compare of the step compare value SD\_CHx\_COMPARE and the actual step counter SD\_CHx\_STEPCOUNT. This way, simple motion pro/uniFB01les can be realized.

Step Length Register SD\_STEPLENGTH The duration of the step pulse - the step length - signal is programmable for adaption to external power stages.

Note

Maximum step length: The step pulse length t STEP \_ PULSE must be lower than the time t STEP between step pulses to actually see step pulses at the outputs. The condition t STEP \_ PULSE &lt; t STEP must be ensured by the application.

Step-to-Direction Delay Register SD\_DELAY The delay between the /uniFB01rst step pulse after a change of the direction is programmable for adaption to external power stages to take external delay paths into account.

Step Direction Unit Con/uniFB01guration Register SD\_CFG Thestepdirection con/uniFB01guration de/uniFB01nes the mode of operation (continuous or de/uniFB01ned number of step pulses), polarity of step pulse signal and direction signal. One bit is for zeroing of step pulse counter. One bit is for enabling and disabling of the step pulse unit and compare mode.

Interrupt Output Signal An IRQ signal TARGET\_REACHED of a single clock pulse length indicates that a certain target position has been reached reached in terms of step counts.

<!-- image -->

## 7.15 MFC IO PWM Block

Both high side and low side control signals are available as separate outputs. A single PWM counter generates the four synchronous PWM signals. The con/uniFB01gurable maximum count de/uniFB01nes the PWM frequency. Left aligned PWM, centered PWM, and right aligned PWM is selectable. The BBM timing is individually programmable for high side and low side. Fixed pulses are available for triggering of ADCs or triggering interrupts of a CPU. Additional programmable trigger output signals are available. Signal PULSE\_ZERO indicates a start of a new PWM cycle and PULSE\_CENTER the center of a PWM cycle. Both are /uniFB01xed. ThetwoprogrammablesignalsPULSE\_AandPULSE\_BareforadvancedADCtriggering. ThesignalPULSE\_AB is the logical or of PULSE\_A and PULSE\_B.

The MFC IO block of TMC8462A offers a 4-channel pulse width modulation (PWM) block including a programmable brake before make (BBM) unit and selection of different PWM modes.

The polarities of the high side, low side, and trigger signals of the PWM unit are programmable.

<!-- image -->

MFC IO Block

Figure 39: Block structure of the MFC IO PWM Block

Value

Description / Function

Comment

| f CLK [Hz]       | 100 MHz    | clock frequency of PWMunit                                              | f CLK = 1 /t CLK                                               |
|------------------|------------|-------------------------------------------------------------------------|----------------------------------------------------------------|
| t CLK [s]        | 10 ns      | clock period length                                                     | t CLK = 1 /f CLK                                               |
| max. t PWM [s]   | 40.96 us   | Length of PWMperiod tPWM = t CLK ∗ (1+ PWM _ MAXCNT )                   | Maximum t PWM with maxi- mumPWMresolution of 12 bit.           |
| min. f PWM [Hz]  | 24.414 kHz | PWMfrequency = 1 /t PWM                                                 | Minimal PWM frequency with maximum PWM reso- lution of 12 bit. |
| t PULSE _ LENGTH |            | Length of trigger pulses with t PULSE _ LENGTH = PULSE _ LENGTH ∗ t CLK | pulse length is adjustable t CLK = 10 ns                       |

<!-- image -->

Parameter

Brake Before Make time

| t BBM   | t BBM tBBM _ H = BBM _ H ∗ t CLK tBBM _ L = BBM _ L ∗ t CLK   | for high side and low side due to different timing requirements, especially when using PMOS @ High Side and NMOS @Low Side   |
|---------|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|

with

Table 204: PWM unit parameters

PWM\_MAXCNTCon/uniFB01guration This con/uniFB01guration can be found in the PWM\_CFG register. It de/uniFB01nes the number of counts per PWM cycle for three PWM units. This determines the length t PWM of each PWM cycle respectively the PWM frequency f PWM . It is programmable for adjustment of the PWM frequency f PWM .

PWM\_CHOPMODE Con/uniFB01guration This con/uniFB01guration can be found in the PWM\_CFG register. It selects the chopper mode of the 4 PWM channels. Each channel can be con/uniFB01gured individually. The following table gives the available chopper modes.

Selection

Chopper

High Side

Low Side

Function

|   000 | no   | off   | off    | no chopper, all off                                                                     |
|-------|------|-------|--------|-----------------------------------------------------------------------------------------|
|   001 | no   | off   | on     | no chopper, LS permanent on                                                             |
|   010 | no   | no    | off    | no chopper, HS permanent on                                                             |
|   011 | no   | off   | off    | no chopper, all off, not used                                                           |
|   100 | no   | off   | off    | no chopper, all off, not used                                                           |
|   101 | yes  | off   | PWM    | chopper LS, HS off                                                                      |
|   110 | yes  | PWM   | Off    | chopper HS, LS off                                                                      |
|   111 | Yes  | PWM   | notPWM | chopper HS and LS complementary, brake-before- make is handled by programmable BBM unit |

Table 205: PWM modes

Individually programmable

<!-- image -->

Figure 40: PWM chopper modes

<!-- image -->

PWM Alignment Con/uniFB01guration This con/uniFB01guration can be found in the PWM\_CFG register. It determines the alignment of the 4 PWM units. The alignment can be programmed left aligned, centered, or right aligned. All 4 channels use the same con/uniFB01guration.

<!-- image -->

<!-- image -->

Figure 41: PWM Timing (centered PWM)

<!-- image -->

Figure 42: PWM Timing (left aligned PWM)

<!-- image -->

Figure 43: PWM Timing (right aligned PWM)

<!-- image -->

PWMPolarity Con/uniFB01guration This con/uniFB01guration can be found in the PWM\_CFG register.

The PWM signals of the 4 channels are of positive logic. Logical one level means ON and logical zero level means OFF. Depending on the MOSFET drivers, switching on a MOSFET might require an inverted logical level. The polarity con/uniFB01guration determines the switching polarities for the high side MOSFETs and switching polarities for the low side MOSFETs.

## BBM Con/uniFB01guration This con/uniFB01guration can be found in the PWM\_CFG register.

The BBM\_L is the time from switch off the high side to switch on the low side in terms of clock cycles. The BBM\_L is common for all 4 high side power MOSFETs.

To avoid cross conduction of the half bridges the brake before make (BBM) timing is programmable. In most cases the same BBM time is su/uniFB03cient for both low side and high side. The BBM time should be programmed as short as possible and as long as necessary. A too long BBM time causes conduction of the bulk diodes of the power MOSFETs and that causes higher power dissipation. In case of using PMOSFETs for high and NMOSFETs for low side with asymmetric switching characteristics, it might be advantageous to program different BBM\_H and BBM\_L times.

The BBM\_H is the time from switch off the low side to switch on the high side in terms of clock cycles. The BBM\_H is common for all 4 low side power MOSFETs.

<!-- image -->

Figure 44: PWM BBM Timing

<!-- image -->

PWMValue Together with the programmed PWM counter length, the PWM values determine the PWM duty cycle. The PWM duty cycle is individually programmable for each of the 4 PWM channels.

Trigger Pulses A and B Con/uniFB01guration The positions of the trigger pulses A and B are programmable within the PWM cycle. These pulses can be used for different purpose, e.g., to trigger ADC sampling at a speci/uniFB01c point in time.

Trigger Pulse Length Con/uniFB01guration The length of PULSE\_A and PULSE\_B and the /uniFB01xed trigger pulses PULSE\_CENTER and PULSE\_ZERO is programmable in terms of clock cycles.

Asymmetric PWM Con/uniFB01guration To realize a wider time window between PWM switching events that are close to each other, an asymmetric PWM shift can be programmed individually for each PWM channel. This leaves the PWM duty cycles unchanged. It is useful for current measurement with sense resistors at the bottom of the MOSFET half bridges.

<!-- image -->

Figure 45: Centered PWM with PWM channel 2 shifted from center (example showing only 3 PWM channels)

<!-- image -->

## 7.16 MFC IO DAC Block

The DAC block generates a digital signal based on a 16 bit pseudo random number generator (PRNG). A pseudo random number (PRN) is compared to the desired output value and a the output is set to 1 if the PRN is lower than the output value. The PRN generator is clocked with 100MHz, which results in a period length of 655.36 µ s. The output signal can be /uniFB01ltered with a simple RC lowpass.

<!-- image -->

10kΩ

Figure 46: RC /uniFB01lter for DAC output with example values

The high voltage outputs are not able to output this signal properly as their slew rate does not allow 10ns pulses. This will lead to voltage levels that don't correspond with the set value. It is recommended to use the DAC block only with the low voltage outputs.

<!-- image -->

Note

## 7.17 MFC IO General Purpose IO Block

When con/uniFB01gured as an output signal, a safe state for each signal is available that is set on the pin in case the emergency state is triggered using MFC\_NES.

TMC8462A has 16 general purpose IO lines that can be freely con/uniFB01gured and used via the 24 MFC IO low voltage and high voltage pins. The general purpose IO signals can be used for indicator LEDs, switch inputs, and even for relays or small DC motors on the HVIO pins.

Figure 47: Block structure of GPIO Unit

<!-- image -->

After reset, all signals are con/uniFB01gured as an input and present a Hi-Z state on the GPIO pin they are mapped to. When a signal should be used as an input signal, no further con/uniFB01guration is required after reset, the signal state can be read directly from the GPI register (7.3.6.2).

To con/uniFB01gure a signal as an output, a 1 bit must be written to the signal position in the GPIO\_CONFIG register (7.3.6.3). Afterwards, the signal can be controlled via the lower 16 bits of the GPO register (7.3.6.1). The upper 16 bits of the GPO register represent the state in case the emergency state is triggered.

GPO (31..16)

GPO (15..0)

GPIO\_CONFIG

MFC\_NES

GPO signal

| X   | X   |   0 |   X |   Hi-Z | Reset state                 |
|-----|-----|-----|-----|--------|-----------------------------|
| X   | 0   |   1 |   1 |      0 | Normal operation            |
| X   | 1   |   1 |   1 |      1 | Normal operation            |
| 0   | X   |   1 |   0 |      0 | Emergency State safe output |
| 1   | X   |   1 |   0 |      1 | Emergency State safe output |

Table 206: GPO signal output states

Comment

<!-- image -->

## 7.18 MFC IO IRQ Block

The MFC\_IRQ output signal is driven by the MFC IO IRQ block and can be used to indicate various events of the MFC IO block. The IRQ unit uses two registers to con/uniFB01gure certain IRQ trigger events and to check the IRQ source when the MFC\_IRQ has been triggered.

<!-- image -->

MFC IO Block

Figure 48: Block structure of the MFC IO IRQ Block

IRQ MASK Register The IRQ mask register allows to enable/disable certain IRQ trigger events of the MFCIO block.

IRQ FLAGS Register This register can be read out after the IRQ was set to identify the IRQ source (especially when more than one IRQ source was masked). Reading out clears this register.

<!-- image -->

## 7.19 MFC IO Watchdog Block

To avoid static reset of the watchdog, the watchdog input condition is edge sensitive, i.e. it becomes reset when the condition goes active respectively goes inactive. Once the watchdog expires, the watchdog safety circuitry becomes active. This action can bring I/O lines into a certain state, in order to allow the system to return to a known, safe condition. Therefore, all I/O lines are directly mapped to the GPIO ports of the chip, so that they perform independently of the actually con/uniFB01gured peripheral con/uniFB01guration.

General Function The watchdog timer allows monitoring of external signals, or monitoring of EtherCAT activity. A certain condition can be chosen for retriggering the watchdog, i.e. a certain input signal constellation. In case this constellation does not occur at least once within a pre-programmable time period, the watchdog timer will expire and will trigger a certain watchdog action.

The watchdog action can be chosen to remain active continuously, until it becomes reset by a watchdog recon/uniFB01guration, or it can be programmed to return to normal operation state, once the selected condition becomes true again.

The watchdog unit /uniFB01nds itself between the MFC IO crossbar and the IO pads as shown in Figure 49. Thus, the watchdog monitors the 24 MFCIOxx signals. Depending on the crossbar mapping these signals are either inputs or outputs. Their logical function depends on the crossbar mapping to/from the MFC IO functional sub-blocks.

In an optional use case, the watchdog timer can be used to measure the maximum delay in between of the occurrence of certain input conditions, in between of SPI frames, etc.

<!-- image -->

MFC IO Block

Figure 49: Logical position of the MFC IO watchdog unit between crossbar and MFCIOxx pins

<!-- image -->

Watchdog Register Set Once initialized, the watchdog timer monitors the application for activity and allows setting of pre-programmed I/O patterns, in case the time limit is expired without activity.

The selected watchdog event resets the timeout counter. As trigger sources, the internal EtherCAT start of frame (PDI\_SOF), the two SPI chip select signals (PDI\_SPI\_CSN and MFC\_CTRL\_SPI\_CSN) as well as any combination of I/O lines can be used. For the I/O lines (MFCIO00 to MFCIO23), the polarity and edge are programmable.

In order to allow tuning of this time limit, the maximum time between two trigger events becomes measured. This function also allows delay time measurement for input channels (i.e. when no watchdog action is chosen). The watchdog timeout counter starts from zero up to WD\_TIME. When it reaches WD\_TIME, it triggers the watchdog action.

When using an MFCIOxx pin programmed as output and as watchdog trigger, the watchdog circuitry will monitor the real output by checking the polarity of the output signal. This way, also a short circuit condition will be detected. The chip select signals respond to a rising edge (i.e. when the SPI interface loads the SPI shift register data into the corresponding registers).

Figure 50: Structure of the MFC IO watchdog unit

<!-- image -->

Watchdog Output Port Con/uniFB01guration The following table contains the assignments of ports/signals to the con/uniFB01guration bits in the WD\_OUT\_MASK\_POL register. An MFCIOxx pin programmed as output is called MFCOxx.

|   0 | MFCO00 polarity   |   32 | MFCO00 mask   |
|-----|-------------------|------|---------------|
|   1 | MFCO01 polarity   |   33 | MFCO01 mask   |
|   2 | MFCO02 polarity   |   34 | MFCO02 mask   |
|   3 | MFCO03 polarity   |   35 | MFCO03 mask   |
|   4 | MFCO04 polarity   |   36 | MFCO04 mask   |
|   5 | MFCO05 polarity   |   37 | MFCO05 mask   |
|   6 | MFCO06 polarity   |   38 | MFCO06 mask   |
|   7 | MFCO07 polarity   |   39 | MFCO07 mask   |
|   8 | MFCO08 polarity   |   40 | MFCO08 mask   |

<!-- image -->

Bit #

Signal

Bit #

Signal

Bit #

Signal

Bit #

Signal

Table 207: MFC IO watchdog WD\_OUT\_MASK\_POL signal/port assignment

|   9 | MFCO09 polarity   |   41 | MFCO09 mask     |
|-----|-------------------|------|-----------------|
|  10 | MFCO10 polarity   |   42 | MFCO10 mask     |
|  11 | MFCO11 polarity   |   43 | MFCO11 mask     |
|  12 | MFCO12 polarity   |   44 | MFCO12 mask     |
|  13 | MFCO13 polarity   |   45 | MFCO13 mask     |
|  14 | MFCO14 polarity   |   46 | MFCO14 mask     |
|  15 | MFCO15 polarity   |   47 | MFCO15 mask     |
|  16 | MFCO16 polarity   |   48 | MFCO16 mask     |
|  17 | MFCO17 polarity   |   49 | MFCO17 mask     |
|  18 | MFCO18 polarity   |   50 | MFCO18 mask     |
|  19 | MFCO19 polarity   |   51 | MFCO19 mask     |
|  20 | MFCO20 polarity   |   52 | MFCO20 mask     |
|  21 | MFCO21 polarity   |   53 | MFCO21 mask     |
|  22 | MFCO22 polarity   |   54 | MFCO22 mask     |
|  23 | MFCO23 polarity   |   55 | MFCO23 mask     |
|  24 | unused/reserved   |   56 | unused/reserved |
|  25 | unused/reserved   |   57 | unused/reserved |
|  26 | unused/reserved   |   58 | unused/reserved |
|  27 | unused/reserved   |   59 | unused/reserved |
|  28 | unused/reserved   |   60 | unused/reserved |
|  29 | unused/reserved   |   61 | unused/reserved |
|  30 | unused/reserved   |   62 | unused/reserved |
|  31 | unused/reserved   |   63 | unused/reserved |

Watchdog Input Port Con/uniFB01guration The following table contains the assignments of ports/signals to the con/uniFB01guration bits in the WD\_IN\_MASK\_POL register. An MFCIOxx pin programmed as input is called MFCIxx.

|   0 | MFCI00 polarity   |   32 | MFCI00 mask   |
|-----|-------------------|------|---------------|
|   1 | MFCI01 polarity   |   33 | MFCI01 mask   |
|   2 | MFCI02 polarity   |   34 | MFCI02 mask   |
|   3 | MFCI03 polarity   |   35 | MFCI03 mask   |
|   4 | MFCI04 polarity   |   36 | MFCI04 mask   |

<!-- image -->

Bit #

Signal

Bit #

Signal

Bit #

Signal

Bit #

Signal

|   5 | MFCI05 polarity   |   37 | MFCI05 mask     |
|-----|-------------------|------|-----------------|
|   6 | MFCI06 polarity   |   38 | MFCI06 mask     |
|   7 | MFCI07 polarity   |   39 | MFCI07 mask     |
|   8 | MFCI08 polarity   |   40 | MFCI08 mask     |
|   9 | MFCI09 polarity   |   41 | MFCI09 mask     |
|  10 | MFCI10 polarity   |   42 | MFCI10 mask     |
|  11 | MFCI11 polarity   |   43 | MFCI11 mask     |
|  12 | MFCI12 polarity   |   44 | MFCI12 mask     |
|  13 | MFCI13 polarity   |   45 | MFCI13 mask     |
|  14 | MFCI14 polarity   |   46 | MFCI14 mask     |
|  15 | MFCI15 polarity   |   47 | MFCI15 mask     |
|  16 | MFCI16 polarity   |   48 | MFCI16 mask     |
|  17 | MFCI17 polarity   |   49 | MFCI17 mask     |
|  18 | MFCI18 polarity   |   50 | MFCI18 mask     |
|  19 | MFCI19 polarity   |   51 | MFCI19 mask     |
|  20 | MFCI20 polarity   |   52 | MFCI20 mask     |
|  21 | MFCI21 polarity   |   53 | MFCI21 mask     |
|  22 | MFCI22 polarity   |   54 | MFCI22 mask     |
|  23 | MFCI23 polarity   |   55 | MFCI23 mask     |
|  24 | unused/reserved   |   56 | unused/reserved |
|  25 | unused/reserved   |   57 | unused/reserved |
|  26 | unused/reserved   |   58 | unused/reserved |
|  27 | unused/reserved   |   59 | unused/reserved |
|  28 | unused/reserved   |   60 | unused/reserved |
|  29 | unused/reserved   |   61 | unused/reserved |
|  30 | unused/reserved   |   62 | unused/reserved |
|  31 | unused/reserved   |   63 | unused/reserved |

Table 208: MFC IO watchdog WD\_IN\_MASK\_POL signal/port assignment

<!-- image -->

## 7.20 MFC IO Emergency Switch Input

It is used to set speci/uniFB01c MFCIOxx outputs to a a con/uniFB01gurable safe state in case of emergency.

The MFC IO block offers a dedicated emergency switch input called MFC\_NES. It is low active.

The emergency switch input MFC\_NES is only active if it is masked in the MFCIO\_IRQ\_CFG register at bit 23. Otherwise it is ignored.

The MFC\_NES pin has weak internal pull-down resistor. A microcontroller or another circuit must actively drive a high level at MFC\_NES for normal operation.

If MFC\_NES triggers (low level), the respective outputs take their con/uniFB01gured safe values. The internal emergency switch /uniFB02ag remains set in register MFCIO\_IRQ\_FLAGS even when the external pin MFC\_NES is already driven high again.

- MFC IO PWM block: the PWM high and low side gate outputs are set to a de/uniFB01ned con/uniFB01gurable safe off-state.

MFC\_NES has impact on the following functional units and outputs:

- MFCIOGPIOblock: all GPIOs that are con/uniFB01gured as output ports via the crossbar are set to a de/uniFB01ned con/uniFB01gurable safe off-state.
- The MFCIO\_IRQ signal will be triggered.
- MFC IO Step and Direction block: the step outputs and internal step counters freeze.

Note

Theemergency/uniFB02ag can only be unset be either doing a reset or by actively writing 2 times into the MFCIO\_IRQ\_CFG register at bit position 23. Thereby, the existing IRQ mask at bit 23 must /uniFB01rst be set to zero and then set back to 1 again. This way, the internal emergency /uniFB02ag is unset. This can be done either by the local application controller or by the EtherCAT master if it has access to register MF-CIO\_IRQ\_CFG.

<!-- image -->

## 7.21 MFC IO Analog and High Voltage Block

## 7.21.1 Multi Voltage High Current I/O Lines

Figure 51: Schematic of multi voltage I/O port

<!-- image -->

Output Characteristics The multi voltage I/O lines allow direct driving of loads like lamps, LEDs or solenoids with up to 100mA output current (200mA short time peak). They can be operated in a push / pull mode, or in low current mode by using an internal pullup / pulldown resistor / current source combination. The eight multi-voltage I/Os are grouped into three groups, which allow the use at the same, or different supply voltages.

A slope limited mode allows reducing electromagnetic emission by using slower switching slopes. Additional /uniFB01lter capacitors (up to 1nF recommended) may be placed on the output lines in this mode to eliminate any HF noise.

In case inductive loads are driven, or loads with long interconnection cables, Schottky protection diodes shall be added in order to avoid exceeding the respective supply voltage limits.

The outputs provide a short to GND and short to supply protection. When an overcurrent condition is detected, the respective MOSFET remains switched off for the period of constant polarity. The short circuit detection features a current dependent activation time. The lower activation threshold is about

<!-- image -->

150mA. Upon exceeding the activation threshold, a time proportional to the excess current is required to switch off the output. This way, short time peak currents can safely be switched, e.g. when long cables or capacitive loads are attached.

An interrupt /uniFB02ag informs about an active overcurrent condition. The short condition will be cleared once the output polarity is toggled.

Input Characteristics The inputs automatically adapt to the supply voltage range. In low voltage range (up to 5V operation), a fast digital Schmitt trigger is used for evaluation of the input logic levels. It provides a TTL compatible input level.

The inputs allow a differential mode between each two combined inputs (see combination table). It is important to set both inputs to the same slope setting in this case. Both input lines deliver a comparison result using each one voltage comparator. This allows direct attachment of differential voltage sources like encoders. The addition of input protection resistor networks is recommended in case long cables are used.

In the high voltage range, the input path switches to a threshold voltage just at half supply voltage range. Both modes add a hysteresis in order to avoid oscillation with slow transitions on the inputs. When switching to slow slope operation, the input lines become /uniFB01ltered in order to eliminate reaction to short voltage spikes. In this mode, the half level comparator is always used. A minimum pull down current of 10 µA is always drawn in order to ensure a de/uniFB01ned level on an open input.

<!-- image -->

## WARNING

When driving inductive loads a freewheeling diode must be provided to the high voltage I/O pins to prevent from latch-up.

Differential input pair

Input 1

Input 2

Table 209: Differential input combination table

| A   | MFC_HV0   | MFC_HV3   |
|-----|-----------|-----------|
| B   | MFC_HV1   | MFC_HV4   |
| C   | MFC_HV2   | MFC_HV5   |
| D   | MFC_HV6   | MFC_HV7   |

The inputs are read via Input 1 result.

## 7.21.2 Switching Regulators

The /uniFB01xed regulator has a /uniFB01xed output voltage of 3.3V. Its main purpose is to supply the TMC8462A I/Os and the digital part via the 1.8V linear regulators. This regulator comes with an integrated 800mA 5.5V Schottky diode which minimizes part count, when an external 5V supply is available. In case of a higher supply voltage, use an external Schottky diode instead.

The TMC8462A integrates a programmable and a /uniFB01xed buck switching regulator designed for up to 500mA of output current.

The second regulator can be programmed to any output voltage ranging from 1.2V up to the supply voltage level. It can be used to generate an additional 3.3V supply or any additional voltage like 5V, 12V or 24V required for operation of peripheral circuits or the high voltage I/O lines. An integrated common linear 5V regulator starts up the switch regulators. Cascading of both switch regulators also is possible.

Both regulators support a wide range of L and C components. This is enabled by a programmable current feedback loop gain and compensation capacity. Both switching regulators provide optional dampening of the coil oscillations to reduce electromagnetic emission.

<!-- image -->

Info

Figure 52: Internal schematic and external components for both switching regulators

<!-- image -->

Input voltage

Output voltage

Table 210: Switching regulator component selection for L and C

|     |             | L SW   | C SW   |
|-----|-------------|--------|--------|
| 5V  | 3.3V        | 15 µH  | 22 µF  |
| 24V | 3.3V to 12V | 68 µH  | 47 µF  |
| 35V | 3.3V to 25V | 68 µH  | 47 µF  |

The capacitor can either be a ceramic type, or an electrolytic low-ESR capacitor in parallel to a 1 µF or larger ceramic capacitor.

## 7.21.3 Analog Block Status Register

- short to ground and short to supply detection for the HV IOs

MFC IO Register 59 HV\_ANA\_STATUS provides various status /uniFB02ags on the actual state of the analog block. This includes:

- high voltage detection /uniFB02ags for the HV IOs

<!-- image -->

- over-temperature detection for the HV IO circuit
- over-temperature detection for the adjustable switching regulator
- short circuit/over-current detection for the switching regulators

Please refer to Table 184 for more details.

<!-- image -->

## 8 Electrical Ratings

## 8.1 Absolute Maximum Ratings

| Note   | the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.   |
|--------|------------------------------------------------------------------------------------------------------------------------------|

Parameter

Symbol

Table 211: Absolute Maximum Ratings for TMC8462A-BA

| Supply and HV IO supply voltage with T J = 0°C *)                  | V VS , V VIOx   |      | 40          | V   |
|--------------------------------------------------------------------|-----------------|------|-------------|-----|
| Supply and HV IO supply voltage max. with T J full range *)        | V VS , V VIOx   |      | 35          | V   |
| Maximum voltage on HV IO pins                                      | V VIO           | -0.6 | V VIOx +0.6 | V   |
| Peak current into HV IO input protection diodes (100ms)            | I HVIOPEAK      | -100 | +100        | mA  |
| Digital I/O supply voltage                                         | V VIO           |      | 3.6         | V   |
| Digital VCC supply voltage (if not supplied by internal regulator) | V VCC           |      | 1.98        | V   |
| Logic input voltage                                                | V I             |      | 3.6         | V   |
| Maximum current to / from digital pins and analog low voltage I/Os | I IO            |      | 10          | mA  |
| 1.8V regulator output current (internal plus external load)        | I VOUT18        |      |             | mA  |
| Switching regulator repetitive short time output current           | I VOUTSW        |      | 800         | mA  |
| Schottky diode reverse voltage                                     | V SDR           |      | 7           | V   |
| Schottky diode repetitive short time forward current               | I SD            |      | 800         | mA  |
| Junction temperature                                               | T J             | 0    | +125        | °C  |
| Storage temperature                                                | T STG           | -55  | +150        | °C  |
| ESD-Protection for interface pins (Charge Device Model, CDM)       | V ESDAP         |      | 750         | V   |
| ESD-Protection for handling (Human body model, HBM)                | V ESD           |      | 2.5         | kV  |

*) Stray inductance of GND and VS connections will lead to ringing of the supply voltage when driving load. This ringing results from the fast switching slopes of the driver outputs in combination with reverse recovery of the body diodes of the output driver MOSFETs. Even small trace inductance as can easily generate a few volts of ringing leading to temporary voltage overshoot. This should be considered when working near the maximum voltage.

<!-- image -->

Min

Max

Unit

## 8.2 Operational Ratings

Parameter

| Junction temperature                                                       | T J          | 0    |    +85 | °C   |
|----------------------------------------------------------------------------|--------------|------|--------|------|
| High voltage supply voltage                                                | V VS,VS0,VS1 | 4.75 |  34    | V    |
| Digital I/O 3.3V supply voltage                                            | V VCCIO      | 3.15 |   3.45 | V    |
| I/O supply voltage (high voltage I/Os)                                     | V VIOx       | 6.0  |  34    | V    |
| I/O Supply voltage (low voltage I/Os)                                      | V VIOx       | 3.0  |   5.5  | V    |
| Continuous output current single high voltage I/O                          | I OUT,HVIO   |      | 100    | mA   |
| Continuous current into / from any high voltage I/O supplyorGNDpin         | I IN,HVIO    |      | 200    | mA   |
| Switching regulator DC output current                                      | I OUT,SW     |      | 500    | mA   |
| 3.3V Switching regulator supply voltage when using internal Schottky diode |              | 4    |   5.5  | V    |
| Core supply voltage                                                        | V VCC_CORE   | 1.65 |   1.95 | V    |

Symbol

Table 212: Operational Ratings for TMC8462A-BA

## 8.3 DC Characteristics and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the speci/uniFB01ed supply voltage range unless otherwise speci/uniFB01ed. Typical values represent the average value of all parts measured at +25 °C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

## 8.3.1 High Voltage I/O Block

## WARNING

Parameter

When driving inductive loads a freewheeling diode must be provided to the high voltage I/O pins to prevent from latch-up.

Symbol

Conditions

Min

Typ

Max

Unit

| HV supply current per high volt- age I/O pad   | I VHVIO   | No current driven, static mode   |    |   90 |   140 | µ A   |
|------------------------------------------------|-----------|----------------------------------|----|------|-------|-------|
| R DSon low side                                | R ONL     | T J =25 °C                       |    |    6 |    10 | Ω     |
| R DSon high side                               | R ONH     | V VIOx =5 V; T J =25 °C          |    |   10 |    15 | Ω     |
| R DSon high side                               | R ONH     | V VIOx =3.3 V; T J =25 °C        |    |   13 |    20 | Ω     |
| Weak pull down current                         | I PD      |                                  | 37 |   63 |   115 | µ A   |
| Weak pull up current                           | I PU      | V VIOx =5 V; T J =25 °C          | 66 |  110 |   210 | µ A   |
| Weak pull up current                           | I PU      | V VIOx =3.3 V; T J =25 °C        | 50 |   76 |   150 | µ A   |

<!-- image -->

Min

Max

Unit

Parameter

Symbol

Conditions

Min

Table 213: High Voltage I/O Block DC Characteristics

| Over-current protection activa- tion threshold sourcing                | I OCH      | Output sourcing cur- rent       | -100   | -150        | -500   | mA   |
|------------------------------------------------------------------------|------------|---------------------------------|--------|-------------|--------|------|
| Over-current protection activa- tion threshold sinking                 | I OCL      | Output sinking cur- rent        | 100    | 150         | 500    | mA   |
| 200mA sink current capability time limit                               | t OCL200   | Output sinking cur- rent        | 10     |             |        | µ s  |
| Switching slope (slow) rising                                          | t HVOLH    | 10% to 90%                      | 100    | 200         | 500    | ns   |
| Switching slope (slow) falling                                         | t HVOHL    | 90% to 10%                      | 100    | 200         | 500    | ns   |
| Switching slope (fast) rising                                          | t HVOLH    | 10% to 90%                      |        | 20          |        | ns   |
| Switching slope (fast) falling                                         | t HVOHL    | 90% to 10%                      |        | 20          |        | ns   |
| Input /uniFB01lter time constant                                       | t HVIF     | Slow slope setting              | 750    | 1000        | 1500   | ns   |
| Input threshold (LV mode)                                              | V HVILLL   | Input going low, V VIOx =5.5 V  | 0.8    |             |        | V    |
| Input threshold (LV mode)                                              | V HVIHLL   | Input going high, V VIOx =5.5 V |        |             | 1.6    | V    |
| Input hysteresis (LV mode)                                             | V HVIHYSTL | V VIOx =5.5 V                   | 0.1    | 0.3         |        | V    |
| Input threshold (HV mode)                                              | V HVIHLH   | Input going high                |        | 0.5 V VIO   |        | V    |
| Input threshold (HV mode)                                              | V HVILLH   | Input going low                 |        | 0.43 V VIO  |        | V    |
| Input hysteresis (HV mode)                                             | V HVIHYSTH |                                 |        | 0.075 V VIO |        | V    |
| Differential mode input offset voltage (LV modeandfast slope)          | V HVID     | Common mode volt- age >=0.5 V   | -10    | 0           | +10    | mV   |
| Differential mode input offset voltage (HV mode or slow slope setting) | V HVID     | Common mode volt- age >=2 V     | -150   | 0           | +150   | mV   |
| Input delay (300mV step)                                               |            | Differential mode, fast slope   |        |             | 100    | ns   |
| Input current per high voltage I/O pad (HV mode)                       | I HVIOH    | V HVIO = V VIOx = 24 V          |        | 26          | 50     | µ A  |
| Input current per high voltage I/O pad (LV mode)                       | I HVIOH    | V HVIO = V VIOx = 3.0 V to 5 V  |        | 10          | 15     | µ A  |

## 8.3.2 Switching Regulators

Parameter

| HV supply current per high voltage I/O pad   | I VHVIO   | No current driven, static mode   | 90   | 140   | µ A   |
|----------------------------------------------|-----------|----------------------------------|------|-------|-------|

Typ

Min

Max

Unit

Typ

Max

Unit

<!-- image -->

Symbol

Conditions

Parameter

## 8.3.3 Digital IOs

Symbol

Conditions

Table 214: Switching Regulator DC Characteristics

| R DSon power switch                                     | R ON       | T J =25 °C                                              |      | 1           | 1.5   | Ω   |
|---------------------------------------------------------|------------|---------------------------------------------------------|------|-------------|-------|-----|
| Over-current protection activation thresh- old sourcing | I OCH      | Output sourc- ing current                               | 800  | 1200        | 1600  | mA  |
| Oscillator frequency                                    | f OSC      | Setting 00 (de- fault) Setting 01 Setting 10 Setting 11 |      | 240 130 470 |       | kHz |
| Duty cycle limit                                        | dl         |                                                         |      | 890 83      |       | %   |
| Schottky diode forward voltage                          | V SDF      | I=350mA                                                 |      | 0.60        | 0.80  | V   |
| Soft startup time                                       |            |                                                         |      | 1           |       | ms  |
| 5V auxiliary voltage regulator output voltage           | V VDD5_OUT |                                                         | 4.75 | 5           | 5.25  | V   |
| 5V auxiliary voltage regulator output current limit     | I VDD5_OUT |                                                         |      | 10          |       | mV  |

All I/O lines include Schmitt-Trigger inputs to enhance noise margin.

Parameter

Symbol

Conditions

Table 215: Digital IOs DC Characteristics

| Input voltage low level            | V INL     | V VCCIO = 3.3V                                       | -0.3   |      | 0.8   | V   |
|------------------------------------|-----------|------------------------------------------------------|--------|------|-------|-----|
| Input voltage high level           | V INH     | V VCCIO = 3.3V                                       | 2.3    |      | 3.6   | V   |
| Input with pull-down               |           | V IN = 3.3V                                          | 5      | 30   | 110   | µ A |
| Input with pull-up                 |           | V IN = 0V                                            | -110   | -30  | -5    | µ A |
| Input low current                  |           | V IN = 0V                                            | -10    |      | 10    | µ A |
| Input high current                 |           | V IN = V DD                                          | -10    |      | 10    | µ A |
| Output voltage low level           | V OUTL    | V VCCIO = 3.3V                                       |        |      | 0.4   | V   |
| Output voltage high level          | V OUTH    | V VCCIO = 3.3V                                       | 2.64   |      |       | V   |
| Output driver strength standard    | I OUT_DRV |                                                      |        | 4    |       | mA  |
| Output driver strength LED outputs | I OUT_LED |                                                      |        | 8    |       | mA  |
| Driver strength NRESET I/O pin     | I OUT_RST | Driven by internal un- dervoltage detectors High/Low | ± 5    | ± 30 |       | µ A |

Min

Min

Typ

Max

Unit

Typ

Max

Unit

<!-- image -->

## 9 Manufacturing Data

## 9.1 Package Dimensions

<!-- image -->

Figure 53: TMC8462A-BA package outline drawing

<!-- image -->

Symbol

Min

Table 216: Dimensions of TMC8462A-BA

| Total thickness             | A   | -            | -            | 1.4          |
|-----------------------------|-----|--------------|--------------|--------------|
| Stand off                   | A1  | 0.27         | -            | 0.37         |
| Substrate thickness         | A2  | 0.26         |              | REF          |
| Mold thickness              | A3  | 0.7          |              | REF          |
| Body size                   | D   |              | 9            | BSC          |
| Body size                   | E   | 9            |              | BSC          |
| Ball diameter               |     | 0.4          | 0.4          | 0.4          |
| Ball Opening                |     | 0.3          | 0.3          | 0.3          |
| Ball width                  | b   | 0.37         | -            | 0.47         |
| Ball pitch                  | e   | 0.75 BSC 121 | 0.75 BSC 121 | 0.75 BSC 121 |
| Ball count                  | n   |              |              |              |
| Edge ball center to center  | D1  | 7.5 BSC      | 7.5 BSC      | 7.5 BSC      |
| Edge ball center to center  | E1  | 7.5 BSC      | 7.5 BSC      | 7.5 BSC      |
| Body center to contact ball | SD  | - BSC        | - BSC        | - BSC        |
| Body center to contact ball | SE  | - BSC 0.1    | - BSC 0.1    | - BSC 0.1    |
| Package edge tolerance      | aaa | 0.2          | 0.2          | 0.2          |
| Mold /uniFB02atness         | bbb |              |              |              |
| Coplanarity                 | ddd | 0.12         | 0.12         | 0.12         |
| Ball offset (package)       | eee | 0.15         | 0.15         | 0.15         |
| Ball offset (ball)          | fff | 0.08         | 0.08         | 0.08         |

Normal

Max

<!-- image -->

## 9.2 Marking

The device marking is shown below. Pin 1 location is highlighted with a dot. YYWW = date code. LLLLL = Lot number.

<!-- image -->

Figure 54: TMC8462A-BA device marking

<!-- image -->

## 10 Abbreviations

Abbreviation

Description

| MCU      | Microcontroller unit, application controller                                            |
|----------|-----------------------------------------------------------------------------------------|
| AL       | Application Layer                                                                       |
| ASIC     | Application Speci/uniFB01c Integrated Circuit                                           |
| CoE      | CAN application protocol over EtherCAT                                                  |
| COMM     | Common Anode or common cathode                                                          |
| CPU      | Central Processing Unit                                                                 |
| DC       | Distributed Clocks                                                                      |
| DPRAM    | Dual Ported Random Access Memory                                                        |
| ECAT     | EtherCAT                                                                                |
| ENI      | EtherCAT Network Information (Information on Network con/uniFB01guration in XML format) |
| EOF      | End of Frame                                                                            |
| ESC      | EtherCAT Slave Controller                                                               |
| ESI      | EtherCAT Slave Information (device description/con/uniFB01guration data in XML format)  |
| ESM      | EtherCAT State Machine                                                                  |
| ETG      | EtherCAT Technology Group                                                               |
| EtherCAT | Ethernet for Control Automation Technology                                              |
| FMMU     | Fieldbus Memory Management Unit                                                         |
| FoE      | File Access over EtherCAT                                                               |
| GPIO     | General Purpose I/O                                                                     |
| GPI      | General Purpose Input                                                                   |
| GPO      | General Purpose Output                                                                  |
| IDE      | Integrated Development Environment                                                      |
| IEC      | International Electrotechnical Commission                                               |
| IRQ      | Interrupt Request                                                                       |
| LED      | Light Emitting Diode                                                                    |
| MI       | (PHY) Management Interface                                                              |
| MII      | Media Independent Interface                                                             |
| MISO     | Master In - Slave Out                                                                   |
| MOSI     | Master Out - Slave In                                                                   |
| PDI      | Process Data Interface                                                                  |
| PDO      | Process Data Object                                                                     |
| PDRAM    | Process Data Random Access Memory                                                       |

<!-- image -->

POF

Passive Optical Fiber

| RMS    | Root Mean Square value                      |
|--------|---------------------------------------------|
| SII    | Slave Information Interface                 |
| SM     | SyncManager                                 |
| SOF    | Start of Frame                              |
| SPI    | Serial Peripheral Interface                 |
| TMCL   | TRINAMIC Motion Control Language            |
| (S)TPC | (Shielded) Twisted Pair Copper              |
| TTL    | Transistor Transistor Logic                 |
| UART   | Universal Asynchronous Receiver Transmitter |
| USB    | Universal Serial Bus                        |
| XML    | Extended Mark-up Language                   |

Table 217: Abbreviations used in this Manual

<!-- image -->

## 11 Figures Index

| 2     |                                                                                                                                |       |       |                                                                                                                            |             |
|-------|--------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------------------------------------------------------------------------------------------------------------------------|-------------|
|       | TMC8462A Evaluation Board .                                                                                                    | 11    | 29    | SII EEPROM circuit (shown for EEP- ROMs >32kBit) . . . . . . . . . . . . . . .                                             | 39          |
| 3     | . . . . TMC8462 breakout board for RJ45 and TPC . . . . . . . . . . . . . . . . . . TMCL-IDE . . . . . . . . . . . . . . . . - | 12    | 30    | Direct PHY to PHY connection . . . . MFC IO Block Con/uniFB01guration using                                                | 39          |
| 4     | .                                                                                                                              | 12    | 31    | the .                                                                                                                      |             |
| 5     | Con/uniFB01guration wizard example MFC IO block con/uniFB01guration . . . . .                                                  | 13    | 32    | ESC Parameter RAM . . . . . . . . . MFC IO Crossbar Example Con/uniFB01gura- tion . . . . . . . . . . . . . . . . . . . .  | 111         |
| 6     | . Con/uniFB01guration wizard example - SII EEPROM content and C-code output . . .                                              | 14 15 | 33    | MFC IO ESI/XML Con/uniFB01guration Block . MFC IO Incremental Encoder Unit .                                               | 151 159 160 |
| 7 8   | TMC8462A-BA Pinout top view . PDI control signals . . . . . . . .                                                              |       | 34    | . Block structure of SPI Master Unit                                                                                       |             |
|       | . . . PDI SPI 2 byte                                                                                                           | 23 24 | 35    | . Block structure of SPI Master Unit                                                                                       | 162 167     |
| 9     | addressing . . . . . . . . . . . . . .                                                                                         |       | 36    | . . .                                                                                                                      |             |
| 10    | PDI SPI 3 byte addressing SPI timing example . . . . . . . . . . .                                                             | 25 26 | 37    | Block structure of the MFC IO Step and Direction Block . . . . . . . . . . . . . .                                         | 171         |
| 11    | signals                                                                                                                        |       |       | Step & Direction                                                                                                           | 172         |
| 12    | MFC control . . .                                                                                                              | 27    | 38    | Signal Timing .                                                                                                            |             |
| 13    | . . . . . . . . MFC CTRL SPI 2 byte addressing . . .                                                                           | 28    | 39    | Block structure of the MFC IO PWM Block . . . . . . . .                                                                    |             |
| 14 15 | MFC CTRL SPI 3 byte addressing . . . MFC SPI timing example . . . . .                                                          | 28 28 | 40    | . . . . . . . . . . . PWMchopper modes .                                                                                   | 174         |
|       | . . . sharing . . . . .                                                                                                        |       | 41    | . . . . . PWMTiming (centered                                                                                              | 176 177     |
| 16    | SPI bus . . . . . . . Physical bus                                                                                             | 29    |       | . . . PWM) . .                                                                                                             |             |
| 17    | . interface pins                                                                                                               | 30    | 42    | . . . PWMTiming (left aligned PWM) . . . . . .                                                                             | 177         |
| 18    | . . . . . . Minimum external circuit for power- on reset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | 31    | 43    | PWMTiming (right aligned PWM) . PWMBBMTiming . . . . . . . . . . .                                                         | 178 178     |
|       | PLL supply /uniFB01lter                                                                                                        | 31    | 44 45 | Centered PWM                                                                                                               |             |
| 19 20 |                                                                                                                                |       |       | . with PWM channel 2 show-                                                                                                 |             |
| 21    | PHY power regulator /uniFB01ltering                                                                                            | 32    |       | shifted from center (example .                                                                                             |             |
|       | . . . . . External circuit for switching regula- tor 0 with VS0 = 5V . . . . . . . . . . .                                     | 33    | 46    | ing only 3 PWMchannels) . . . . . . RC /uniFB01lter for DAC output with example values . . . . . . . . . . . . . . . . . . | 179         |
| 22    | External circuit for switching regula- tor 0 with VS0 > 5V . . . . . . . . . . .                                               | 33    | 47    | . Block structure of GPIO Unit . . .                                                                                       | 180 181     |
| 23    | External circuit for adjustable buck regulator . . . . . . . . . . . . . . . . .                                               | 34    | 48 49 | . . Block structure of the MFC IO IRQ Block182                                                                             |             |
| 24    | Minimum external supply circuit for single 3.3V supply . . . . . . . . . . . .                                                 | 35    |       | Logical position of the MFC IO watch- dog unit between crossbar and MF- CIOxx pins . . . . . . . . . . . . . . . .         | 183 184     |
| 25    | Minimum external supply circuit for single 5V supply . . . . . . . . . . . . .                                                 |       | 50    | Structure of the MFC IO watchdog unit                                                                                      | 188         |
|       | Minimum external supply circuit for                                                                                            | 36    | 51    | Schematic of multi voltage I/O port Internal schematic and external                                                        |             |
| 26    | single supply >5V . . . . . . . . . . . .                                                                                      | 37    | 52    | . com- ponents for both switching regulators                                                                               | 190         |
| 27    | Typicalpowersupplychainusingboth buck converters . . . . . . . . . . . . .                                                     | 38    | 53 54 | TMC8462A-BA package outline drawing196 TMC8462A-BA device marking . . . .                                                  | 198         |

.

.

.

.

.

.

.

.

.

.

.

.

38

<!-- image -->

1

General device architecture

.

.

.

.

.

.

7

28

Status LED circuit

## 12 Tables Index

| 2     | Pin and Signal description for TMC8462A-BA . . . . . . . . . . . . . . . . .   | 22    | 48    | Register 0x030E (PDI Err Code) . . .                                                    | 72    |
|-------|--------------------------------------------------------------------------------|-------|-------|-----------------------------------------------------------------------------------------|-------|
|       | . . . . . .                                                                    |       | 49    | . Register 0x0310:0x0313 (LL Counter) Register 0x0400:0x0401 (WD                        | 73    |
| 3     | PDI signal description PDI                                                     | 24    | 50    | Divider)                                                                                | 74    |
| 4     | SPI commands . . . . . . . . . . .                                             | 24    | 51    | Register 0x0410:0x0411 (WD Time PDI) PD)                                                | 74    |
| 5     | MFC CTRL SPI signal description . .                                            | 27 30 | 52    | Register 0x0420:0x0421 (WD Time                                                         | 74    |
| 6     | . Physical bus interface pin description                                       |       | 53    | Register 0x0440:0x0441 (WD Status PD) .                                                 | 75    |
| 7     | Available EtherCAT Chip Features (0 = not available/disabled, 1 = avail- .     |       | 54    | Register 0x0442 (WD Counter PD) . .                                                     | 75    |
|       | able/enabled . . . . . . . . . . . . . .                                       | 42    | 55    | Register 0x0443 (WD Counter PDI) .                                                      | 76    |
|       |                                                                                |       | 56    | SII EEPROM Interface Register Overview                                                  | 77    |
| 8     | TMC8462A EtherCAT Registers . . . . Register 0x0000 (Type) . . . . .           | 48    | 57    | Register 0x0500 (PROM Con/uniFB01g) . . . .                                             | 77    |
| 9     | . . . . Register 0x0001                                                        | 49 49 | 58    | Register 0x0501 (PROM PDI Access) .                                                     | 77    |
| 10 11 | (Revision) . . . . . . . Register 0x0002 (Build) . .                           | 49    | 59    | Register 0x0502:0x0503 (PROM Cntrl)                                                     | 79    |
|       | . . . .                                                                        |       | 60    | Register 0x0504:0x0507 (PROM Ad- .                                                      |       |
| 12    | . . . Register 0x0004 (FMMUs) . . . . . . . Register 0x0005 (SMs) . . . . .    | 50 50 |       | dress) . . . . . . . . . . . . . . . . . .                                              | 79    |
| 13    | .                                                                              |       | 61    | Register 0x0508:0x050F (PROM Data)                                                      | 80    |
| 14 15 | . . . Register 0x0006 (RAM Size) . . . . .                                     | 50    | 62    | Register 0x0580:0x05E1 (MFC IO Con/uniFB01g)                                            | 81    |
|       | . Register 0x0007 (Port Descriptor) . .                                        | 51    | 63    | MII Management Interface Register . . . . .                                             |       |
| 16    | Register 0x0008:0x0009 (ESC Features) Register 0x0010:0x0011 (Station Addr)    | 52    |       | Overview . . . . . . . . . . . .                                                        | 82    |
| 17 18 | Register 0x0012:0x0013 (Station Alias)                                         | 53 53 | 64    | Register 0x0510:0x0511 (MI Cntrl/State)                                                 | 83    |
| 19    | Register 0x0020 (Write Register Enable)                                        | 54    | 65 66 | Register 0x0512 (PHY Address) . . . . Register 0x0513 (PHY Register Address)            | 83 84 |
| 20 21 | Register 0x0021 (Write Register Prot.) Register 0x0030 (ESC Write Enable) .    | 54    | 67    | Register 0x0514:0x0515 (PHY Data) .                                                     | 84    |
|       | Register 0x0031 (ESC Write Prot.) . . .                                        |       |       | Register 0x0516 (MI ECAT State) . . .                                                   | 84    |
| 22 23 |                                                                                | 54 55 | 68    | Register 0x0517 (MI PDI State) . . .                                                    | 85    |
|       | Register 0x0040 (ESC Reset ECAT) . . .                                         |       | 69    | . Register 0x0518+y (PHY Port Status)                                                   | 85    |
| 24    | Register 0x0041 (ESC Reset PDI) .                                              | 56 56 | 70 71 | . FMMU Register Overview . . . . . .                                                    | 86    |
|       |                                                                                | 58    | 72    | . Register 0x06y0:0x06y3 (Log Start                                                     |       |
| 25 26 | . Register 0x0100:0x0103 (DL Control) Register 0x0108:0x0109 (R/W Offset)      |       |       | Addr)                                                                                   | 86    |
|       |                                                                                | 58    | 73    | Register 0x06y4:0x06y5 (FMMU Length) .                                                  | 86    |
| 27 28 | Register 0x0110:0x0111 (DL Status) .                                           | 60    | 74 75 | Register 0x06y6 (Log. Start Bit) . . .                                                  | 87    |
|       | Decoding port state in ESC DL Status register 0x0111 (typical modes only) .    | 60 61 | 76    | Register 0x06y7 (Log. Stop Bit)) . . . . Register 0x06y8:0x06y9 (Phy. Start Addr        | 87 87 |
| 29    | Register 0x0120:0x0121 (AL Cntrl) . .                                          |       |       | Register 0x06yA (Phy. Start Bit) . . . .                                                | 87    |
| 30    | Register 0x0130:0x0131 (AL Status) .                                           | 62    | 77 78 | Register 0x06yB (FMMU Type) . . .                                                       | 88    |
| 31    | Register 0x0134:0x0135 (AL Status Code) . . . . . . . . . . . . . . . . . . .  | 62    | 79 80 | . Register 0x06yC (FMMU Activate) . . .                                                 | 88 88 |
| 32    | Register 0x0138 (RUN LED Override) . .                                         | 63    | 81    | Register 0x06yD:0x06yF (Reserved) . SyncManager Register Overview .                     | 89    |
| 33    | Register 0x0139 (ERR LED Override) . .                                         | 63    |       | . .                                                                                     |       |
|       | Register . .                                                                   | 64    |       | . .                                                                                     | 89    |
| 34 35 | 0x0140 (PDI Control) . . Register 0x0141 (ESC Con/uniFB01g) . .                |       | 82    | Register 0x0800+y*8:0x0801+y*8 . . .                                                    |       |
| 36    | . . Register 0x014E (PDI Information)) . .                                     | 64 65 | 83    | (Phy. Start Addr) . . . . . . . . Register 0x0802+y*8:0x0803+y*8(SM . . . . . . . . . . |       |
| 37    | Register 0x0150 (PDI SPI CFG) . . .                                            | 66    | 84    | Length) . . . . .                                                                       | 89    |
| 38    | . . Register 0x0151 (SYNC/LATCH CFG) .                                         | 67    |       | . . . Register 0x0804+y*8 (SM Control) . Register 0x0805+y*8 (SM Status) . .            | 90 91 |
| 39    | Register 0x0152:0x0153 (PDI SPI extCFG) . . . . . . . . . . . . . . . . . .    |       | 85    | . .                                                                                     |       |
|       |                                                                                | 67    | 86    | Register 0x0806+y*8 (SM Activate) . . 0x0807+y*8 (SM PDI Control)                       | 91    |
| 40    | Register 0x0200:0x0201 (ECAT Event M.)                                         | 68    | 87    | Register Register 0x0900:0x0903 (Rcv Time                                               | 92    |
| 41    | Register 0x0204:0x0207 (AL Event Mask)                                         | 68    | 88    | P0) Register 0x0904:0x0907 (Rcv Time                                                    | 93    |
| 42    | Register 0x0210:0x0211 (ECAT Event R.)                                         | 69    | 89    | P1) Time)                                                                               | 93    |
| 43    | Register 0x0220:0x0223 (AL Event R.)                                           | 70 71 | 90    | Register 0x0910:0x0917 (System Register 0x0918:0x091F (Rcv Time                         | 94 95 |
| 44    | Register 0x0300:0x0307 (RX Err Cnt) .                                          |       | 91    | EPU)                                                                                    |       |
| 45 46 | Register 0x0308:0x030B (FW RX Err Cnt) Register 0x030C (Proc. Unit Err Cnt) .  | 71 71 | 92    | Register 0x0920:0x0927 (Sys Time Off- set) . . . . . . . . . . . . . . . . . . . .      | 95    |

Register 0x030D (PDI Err Cnt)

.

.

.

.

.

72

<!-- image -->

1

TMC8462A order codes

.

.

.

.

.

.

.

.

6

47

|         | lay) . . . . . . . . . . . . . . . . . . . .                                     |         | 135     | IO Register 10 -                                                             |         |
|---------|----------------------------------------------------------------------------------|---------|---------|------------------------------------------------------------------------------|---------|
|         |                                                                                  | 95      |         | MFC SPI_LENGTH . .                                                           | 119     |
| 94 95   | Register 0x092C:0x092F (Sys Time Diff)                                           | 95      | 136     | MFC IO Register 11 - SPI_TIME . .                                            | 119     |
|         | Register 0x0930:0x931 (Speed Cnt Start) Diff)                                    | 96      | 137 138 | . . MFC IO Register 12 - I2C_TIMEBASE . MFC                                  | 120 120 |
| 96      | Register 0x0932:0x0933 (Speed Cnt                                                | 96 97   |         | IO Register 13 - I2C_CONTROL . IO Register 14 - I2C_STATUS . .               | 120     |
| 97      | Register 0x0934 (Sys Time Diff Filter) . Depth)                                  |         | 139     | MFC . MFC IO Register 15 - I2C_ADDRESS                                       |         |
| 98      | Register 0x0935(SpeedCntFilter                                                   | 97      | 140     | . MFC IO Register 16 - I2C_DATA_R .                                          | 121     |
| 99      | Register 0x0980 (Cyclic Unit Cntrl) . .                                          | 98      | 141     | IO Register 17 - I2C_DATA_W                                                  | 121     |
| 100     | Register 0x0981 (SYNC Out Activation)                                            | 99      | 142 143 | . MFC . .                                                                    | 121     |
| 101     | Register 0x0982:0x0983 (SYNC Pulse Length) . . . . . . . . . . . . . . . . . . . | 100     | 144     | MFCIORegister 18 - SD_CH0_STEPRATE122 MFCIORegister 19 -                     |         |
|         |                                                                                  |         |         | SD_CH1_STEPRATE122 SD_CH2_STEPRATE122                                        |         |
| 102     | Register 0x0984 (Activation Status) .                                            | 100     | 145     | MFCIORegister 20 - MFCIORegister21-SD_CH0_STEPCOUNT123                       |         |
| 103     | Register 0x098E (SYNC0 Status) . . . .                                           | 100 101 | 146 147 |                                                                              |         |
| 104     | Register 0x098F (SYNC1 Status) . . .                                             |         |         | MFCIORegister22-SD_CH1_STEPCOUNT123                                          |         |
| 105     | . Register 0x0990:0x0997 (Start Time Cyclic Operation) . . . . . . . . . . . .   | 101     | 148 149 | MFCIORegister23-SD_CH2_STEPCOUNT123                                          |         |
|         | Register                                                                         |         |         | MFCIORegister24-SD_CH0_STEPTARGET123 MFCIORegister25-SD_CH1_STEPTARGET124    |         |
| 106     | 0x0998:0x099F (Next SYNC1)                                                       | 101     | 150 151 | MFCIORegister26-SD_CH2_STEPTARGET124                                         |         |
| 107     | Register 0x09A0:0x09A3 (SYNC0 Cycle Time) . . . . . . . . . . . . . . . . . . .  |         |         | MFCIORegister27-SD_CH0_COMPARE124                                            |         |
| 108     | Register 0x09A4:0x09A7 (SYNC1 Cycle .                                            | 102     | 152 153 | MFCIORegister28-SD_CH1_COMPARE125                                            |         |
|         | Time) . . . . . . . . . . . . . . . . . . .                                      | 102     | 154     | MFCIORegister29-SD_CH2_COMPARE125                                            |         |
| 109 110 | Register 0x09A8 (Latch0 Control) . .                                             | 103     | 155     | MFC IO Register 30 - SD_CH0_NEXTSR MFC                                       | 125     |
| 111     | Register 0x09A9 (Latch1 Control) . . Register 0x09AE (Latch0 Status) . .         | 103     | 156     | IO Register 31 - SD_CH1_NEXTSR IO Register 32 - SD_CH2_NEXTSR                | 125 126 |
| 112     | . . .                                                                            | 104     | 157 158 | MFC IO Register 33 - SD_STEPLENGTH                                           | 126     |
|         | Register 0x09AF (Latch1 Status) . . . .                                          | 104     |         | MFC MFC                                                                      |         |
| 113     | Register 0x09B0:0x09B7 (Latch0 Time Pos Edge) . . . . . . . . . . . . . . . .    |         | 159     | IO Register 34 - SD_DELAY . . . . MFC IO Register 35 - SD_CFG . . .          | 126 127 |
|         | . Time                                                                           | 105     | 160 161 | . .                                                                          |         |
| 114     | Register 0x09B8:0x09BF (Latch0                                                   |         |         | MFC IO Register 36 - PWM_CFG . . . . MFC IO Register 37 - PWM1 . .           | 128     |
|         | Neg Edge) . . . . . . . . . . . . . . . . (Latch1 Time                           | 105     | 162     | . . . . PWM2                                                                 |         |
| 115     |                                                                                  |         |         | MFC IO Register 38 - . . . . . .                                             | 129     |
|         | . . . . . Register 0x09C8:0x09CF                                                 | 106     |         | . . . . . .                                                                  |         |
|         | Register 0x09C0:0x09C7 Pos Edge) . . . . . . . . . . . . (Latch1                 |         | 163 164 | MFC IO Register 39 - PWM3 MFC IO Register 40 -                               | 129 129 |
| 116     | Time .                                                                           |         | 165 166 | PWM4 . . . . . . MFC IO Register 41 -                                        | 129     |
| 117     | Change Event Time) . . . . . . . . . .                                           |         | 167     |                                                                              |         |
|         | Neg Edge) . . . . . . . . . . . . . . . Register 0x09F0:0x09F3 (ECAT Buffer      | 106     |         | PWM1_CNTRSHFT130 MFC IO Register 42 - PWM2_CNTRSHFT130                       |         |
| 118     | . Register 0x09F8:0x09FB (PDI Buffer                                             | 107     | 168 169 | MFC IO Register 43 - PWM3_CNTRSHFT130                                        |         |
|         | Start Event Time) . . . . . . . . . . . . Buffer                                 | 107     | 170     | MFC IO Register 44 - PWM4_CNTRSHFT130 MFCIORegister45-PWM_PULSE_B_PULSE_A131 |         |
| 119     | Register 0x09FC:0x09FF (PDI                                                      |         | 171     | MFCIORegister46-PWM_PULSE_LENGTH131 . . . . . .                              |         |
|         | Change Event Time) . . . . . . . . . . . Register 0x0E00:0x0E07 (Product         | 107     | 172     | MFC IO Register 47 - GPO . IO Register 48 -                                  | 132 132 |
| 120     | ID) . Register 0x0E08:0x0E0F (Vendor ID)                                         | 108     | 173     | MFC GPI . . . .                                                              |         |
| 121     | .                                                                                | 108     | 174     | . . . . MFC IO Register 49 - GPIO_CONFIG .                                   | 132 133 |
| 122     | Process Data RAM (0x1000:0xFFFF) . . . .                                         | 109     | 175 176 | MFC IO Register 50 - DAC_VAL . . . . MFC IO Register 51 -                    |         |
| 123     | Process Data RAM Size . . . . . .                                                | 109     | 177     | MFCIO_IRQ_CFG MFC IO Register 52 - MFCIO_IRQ_FLAGS135                        | 134     |
| 124     | MFC IO Register Overview for . . . . . . . . .                                   |         | 178     | . .                                                                          | 136     |
|         | TMC8462A-BA . . . . . MFC IO Register 0 -                                        | 114     |         | MFC IO Register 53 - WD_TIME . . MFC IO Register 54 - WD_CFG . .             |         |
| 125     | ENC_MODE . . . . .                                                               | 115     | 179     | .                                                                            | 136     |
| 126     | MFC IO Register 1 - ENC_STATUS . MFC IO Register 2 - X_ENC (write)               | 116 116 | 180     | . . MFCIORegister55-WD_OUT_MASK_POL137 MFC IO Register 56 - WD_OE_POL .      |         |
| 127     | . . .                                                                            |         | 181 182 | . WD_IN_MASK_POL138                                                          | 137     |
| 128     | MFC IO Register 3 - X_ENC (read) . . MFC IO Register 4 - ENC_CONST .             | 116 116 |         | MFC IO Register 57 - MFC IO Register 58 - WD_MAX .                           | 138     |
| 129     | . .                                                                              | 117     | 183 184 | .                                                                            |         |
| 130     | MFC IO Register 5 - ENC_LATCH . . .                                              |         | 185     | . MFC IO Register 59 - HV_ANA_STATUS                                         | . 139   |
| 131     | MFC IO Register 6 - SPI_RX_DATA . . .                                            | 118 118 |         | MFCIORegister63-SYNC1_SYNC0_EVENT_CNT139                                     | 140     |
| 132     | MFC IO Register 7 - SPI_TX_DATA . . .                                            |         | 186     | MFC IO Register 64 - HVIO_CFG . . . . BUCK_CONV_CFG142                       |         |
| 133     | MFC IO Register 8 - SPI_CONF . . . . .                                           | 119     | 187     | MFC IO Register 65 -                                                         |         |

<!-- image -->

188

MFC IO Register 66 - AL\_OVERRIDE

.

143

206

GPO signal output states .

|         | EEPROM Parameter Map . . . . . . . . . .                                                    | 147     | 207     |                                                                             |     |
|---------|---------------------------------------------------------------------------------------------|---------|---------|-----------------------------------------------------------------------------|-----|
| 189 190 | Crossbar con/uniFB01guration                                                                | 150     |         | MFCIOwatchdogWD_OUT_MASK_POL signal/port assignment . . . . . . . . .       | 185 |
| 191     | values Slope                                                                                |         | 208     |                                                                             |     |
|         | . Slow/Weak High/WeakLow con/uniFB01g152 .                                                  |         |         | MFC IO watchdog WD_IN_MASK_POL signal/port assignment . . . . . . . . .     |     |
| 192 193 | Differential HV input con/uniFB01guration . Con/uniFB01guration bits for 3.3V switching     | 152     |         |                                                                             | 186 |
|         | regulator . . . . . . . . . . . . . . . . .                                                 | 153     | 209 210 | Differential input combination table . Switching regulator component selec- | 189 |
| 194     | Con/uniFB01guration bits for adjustable switching regulator . . . . . . . . . . . . . . . . | 154 155 | 211     | tion for L and C . . . . . . . . . . . . . Absolute Maximum Ratings         | 190 |
| 195     | Register mapping example . Register con/uniFB01guration byte                                |         |         | for TMC8462A-BA . . . . . . . . . . . . Operational Ratings for             | 192 |
| 196     | . . . . . .                                                                                 | 157 158 | 212     |                                                                             |     |
| 197     | . . . . . .                                                                                 |         |         | . . TMC8462A-BA Character-                                                  | 193 |
| 198     | Trigger source descriptions SPI mode con/uniFB01guration . . . . . . . .                    | 163     | 213     | High Voltage I/O Block DC . . . . . .                                       |     |
| 199     | . . . . . . . . .                                                                           | 167     |         | istics . . . . . . . . . . . . .                                            | 194 |
| 200     | I2C control commands I2C status register bits                                               | 168     |         | . Switching Regulator DC                                                    | 195 |
| 201     | . . . . . . . . . . .                                                                       | 168     | 214 215 | Characteristics . . . . . . . . .                                           | 195 |
|         | I2C status overview . . . . . . . . . I2C Addres register                                   |         |         | Digital IOs DC Characteristics Dimensions of TMC8462A-BA                    | 197 |
| 202 203 | . Step and direction                                                                        | 169     | 216     | . Abbreviations used in this                                                | 200 |
|         | . . . . . . . . . . unit parameters . . . . . . . . .                                       | 172     | 217     | Manual . . IC Revision . . . . . . . . . . . . . .                          | 205 |
| 204 205 | PWMunit parameters . . . . . . .                                                            | 175     | 218     | . .                                                                         |     |
|         | PWMmodes . . . . . . . . .                                                                  | 175     | 219     | Document Revision . . . . . . . . . . .                                     | 205 |

.

.

.

.

.

.

.

181

<!-- image -->

## 13 Revision History

## 13.1 IC Revision

Version

Date

Author

## 13.2 Document Revision

Version

Date

Author

| V1.00   | 23.12.2021   | SK   | Initial release based on TMC8462-BA data sheet - Order codes updated in Table 1. - Temperature ratings corrected based on PHY specs in Table 212. - Description of memoryblock mapping updated throughout Section 7 and in Section 7.8. - ESD ratings updated in Table 211. - Updated block diagram for PLL supply /uniFB01lter to re/uniFB02ect TMC8462A-BA changes in Figure 19.   |
|---------|--------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V1.10   | 29.08.2022   | SK   | - Updated package marking picture in Figure 54. - Pin L3 name and description changed from REF_CLK100_IN to REF_CLL25_IN. See Section 4.2. Figure 1 and description updated ac- cordingly. - Pin descriptions for switching regulators 0 and 1 extended in pin table in Section 4.2                                                                                                  |

Description

Table 218: IC Revision

| V2.0   | 20.06.2019   | -   | V2.0, based on TMC8462-BA   |
|--------|--------------|-----|-----------------------------|

Description

Table 219: Document Revision

<!-- image -->