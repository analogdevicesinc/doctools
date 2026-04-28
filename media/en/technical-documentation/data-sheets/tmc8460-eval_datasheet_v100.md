<!-- lastmod 2023-09-13 -->
<!-- image -->

## TMC8460-Eval

## Evaluation Board for the TMC8460-BI EtherCAT Slave Controller with Enhanced Functionality

TRINAMIC ®  Motion Control GmbH &amp; Co. KG Hamburg, GERMANY www.trinamic.com

The TMC8460-Eval is an evaluation board for the TMC8460-BI EtherCAT Slave Controller (ESC). It integrates into the evaluation board infrastructure by TRINAMIC but can also be used as a standalone evaluation platform.

## Focus

-  Evaluation of the TMC8460's extended control features (MFCIO, Multi-Function and Control IO Block)
-  Control of extended features by MCU or EtherCAT
-  EtherCAT state machine can be implemented in MCU or emulated (Device Emulation)

## Features

-  SPI interfaces between MCU and ESC (standard PDI + control interface for extra functions)
-  SPI and GPIO interfaces to use in chained TRINAMIC driver evaluation boards
-  ABN-Decoder inputs, 3 channel PWM and Step/Direction outputs available on extra header

## Table of Contents

| TABLE OF CONTENTS ...........................................................................................................................................................2   | TABLE OF CONTENTS ...........................................................................................................................................................2   | TABLE OF CONTENTS ...........................................................................................................................................................2   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                                                                                                                                | BOARD OVERVIEW ......................................................................................................................................................3           | BOARD OVERVIEW ......................................................................................................................................................3           |
| 1.1                                                                                                                                                                              | CONNECTORS ..............................................................................................................................................................3       | CONNECTORS ..............................................................................................................................................................3       |
| 1.1.1                                                                                                                                                                            | 1.1.1                                                                                                                                                                            | Power connector .........................................................................................................................................3                       |
| 1.1.2                                                                                                                                                                            | 1.1.2                                                                                                                                                                            | EtherCAT connector ....................................................................................................................................3                         |
| 1.1.3                                                                                                                                                                            | 1.1.3                                                                                                                                                                            | MCU control input connector ..................................................................................................................3                                  |
| 1.1.4                                                                                                                                                                            | 1.1.4                                                                                                                                                                            | Driver control output connector .............................................................................................................4                                   |
| 1.1.5                                                                                                                                                                            | 1.1.5                                                                                                                                                                            | Extended control feature connector ......................................................................................................5                                       |
| 1.1.6                                                                                                                                                                            | 1.1.6                                                                                                                                                                            | Service connector ........................................................................................................................................6                      |
| 1.2                                                                                                                                                                              | I/O VOLTAGES ............................................................................................................................................................6       | I/O VOLTAGES ............................................................................................................................................................6       |
| 2                                                                                                                                                                                | CONFIGURATION SOLDER JUMPERS ......................................................................................................................7                             | CONFIGURATION SOLDER JUMPERS ......................................................................................................................7                             |
| 2.1                                                                                                                                                                              | 2.1                                                                                                                                                                              | NES SOURCE ..............................................................................................................................................................7       |
| 2.2                                                                                                                                                                              | 2.2                                                                                                                                                                              | PDI/MFC CTRL SPI BUS SHARING ...........................................................................................................................7                        |
| 2.3                                                                                                                                                                              | 2.3                                                                                                                                                                              | DEVICE EMULATION ...................................................................................................................................................7            |
| 2.4                                                                                                                                                                              | 2.4                                                                                                                                                                              | RESET OUT POLARITY .................................................................................................................................................7            |
| 3                                                                                                                                                                                | DISCLAIMER ..................................................................................................................................................................8   | DISCLAIMER ..................................................................................................................................................................8   |
| 4                                                                                                                                                                                | REVISION HISTORY ....................................................................................................................................................8           | REVISION HISTORY ....................................................................................................................................................8           |

## 1 Board overview

Figure 1 - Dimensions and connector positions

<!-- image -->

## 1.1 Connectors

## 1.1.1 Power connector

The power connector on the board is a standard Micro-USB connector. No USB data connection is used.

## 1.1.2 EtherCAT connector

The EtherCAT connector is a two port RJ45 socket, the port closer to the USB port is the EtherCAT input for data coming from the master, the other port is the output to other EtherCAT slaves.

## 1.1.3 MCU control input connector

The  MCU  control  input  connector  is  a  female  2x22pin  header  with  0.1'/2.54mm  pitch.  On  this connector, access to the TMC8460's PDI and MFC control SPI busses is available. If the TMC8460 is not operated  in  device  emulation  mode,  a  MCU  must  be  connected  here,  at  least  for  control  of  the EtherCAT state machine.

|   Pin | Signal   | Description                                                  |   Pin | Signal   | Description                            |
|-------|----------|--------------------------------------------------------------|-------|----------|----------------------------------------|
|     1 | VM       | Motor supply voltage, directly connected to output connector |     2 | GND      | Ground                                 |
|     3 | GND      | Ground                                                       |     4 | ID_CLK   | Directly connected to output connector |
|     5 | +5V_USB  | 5V Supply voltage from USB                                   |     6 | ID_CH0   | Directly connected to output connector |
|     7 | ID_CH1   | Directly connected                                           |     8 | DIO0     | Directly connected to                  |

Table 1 - Signal list for MCU control input connector

|    |                   | to output connector                                   |    |                   | output connector                                          |
|----|-------------------|-------------------------------------------------------|----|-------------------|-----------------------------------------------------------|
|  9 | DIO1              | Directly connected to output connector                | 10 | PROM_CLK          | I2C Clock to the ESC EEPROM                               |
| 11 | PROM_DATA         | I2C Data to/from the ESC EEPROM                       | 12 | DIO4              | Directly connected to output connector                    |
| 13 | DIO5              | Directly connected to output connector                | 14 | AIN0              | Directly connected to output connector                    |
| 15 | AIN1              | Directly connected to output connector                | 16 | AIN2              | Directly connected to output connector                    |
| 17 | DIO6              | Directly connected to output connector                | 18 | DIO7              | Directly connected to output connector                    |
| 19 | EN_16MHZ_OUT      | Enable signal for the 16MHz clock output              | 20 | DIO9              | Directly connected to output connector                    |
| 21 | DIO10             | Directly connected to output connector                | 22 | DIO11             | Directly connected to output connector                    |
| 23 | MFC_nES_MCU       | Low active emergency switch signal, controlled by MCU | 24 | MFC_CTRL_SPI_CSN  | SPI chipselect (low active) for the MFCIO register access |
| 25 | MFCIO_IRQ         | Interrupt signal from the MFCIO block                 | 26 | PDI_SPI_IRQ       | Interrupt signal from the ESC                             |
| 27 | MFC_CTRL_SPI_SCK  | SPI clock for the MFCIO register access               | 28 | MFC_CTRL_SPI_MOSI | SPI data input for the MFCIO register access              |
| 29 | MFC_CTRL_SPI_MISO | SPI data output for the MFCIO register access         | 30 | PDI_SPI_CSN       | SPI chipselect (low active) for the ESC PDI interface     |
| 31 | PDI_SPI_SCK       | SPI clock for the ESC PDI interface                   | 32 | PDI_SPI_MOSI      | SPI data input for the ESC PDI interface                  |
| 33 | PDI_SPI_MISO      | SPI data output for the ESC PDI interface             | 34 | PDI_SOF           | Start-Of-Frame signal from the ESC                        |
| 35 | PDI_EOF           | End-Of-Frame signal from the ESC                      | 36 | PDI_WD_TRIGGER    | Trigger pulse of the PDI watchdog of the ESC              |
| 37 | PDI_WD_STATE      | State of the PDI watchdog of the ESC                  | 38 | EEPROM_OK         | Shows that the EEPROM was correctly loaded by the TMC8460 |
| 39 | SYNC_OUT0         | Distributed Clock Sync Signal 0                       | 40 | SYNC_OUT_1        | Distributed Clock Sync Signal 1                           |
| 41 | nRST              | Low active reset signal for the TMC8460               | 42 | +5V_VM            | 5V, only connected to output connector                    |
| 43 | GND               | Ground                                                | 44 | GND               | Ground                                                    |

Signals  marked  in  light  red  are  only  connected  between  the  MCU  control  input  connector  and  the Driver control output connector.

## 1.1.4 Driver control output connector

The driver control output connector is a female 2x22pin header with 0.1'/2.54mm pitch. On this connector the MFCIO SPI bus and GPIOs are available as well as some GPIOs directly passed through from the MCU control input connector.

Table 2 - Signal list for Driver control output connector

|   Pin | Signal        | Description                                                 |   Pin | Signal       | Description                                 |
|-------|---------------|-------------------------------------------------------------|-------|--------------|---------------------------------------------|
|     1 | VM            | Motor supply voltage, directly connected to input connector |     2 | GND          | Ground                                      |
|     3 | GND           | Ground                                                      |     4 | ID_CLK       | Directly connected to                       |
|     5 | +5V_USB       | 5V Supply voltage from USB                                  |     6 | ID_CH0       | Directly connected to input connector       |
|     7 | ID_CH1        | Directly connected to input connector                       |     8 | DIO0         | Directly connected to input connector       |
|     9 | DIO1          | Directly connected to input connector                       |    10 | n.c.         | Not connected                               |
|    11 | n.c.          | Not connected                                               |    12 | DIO4         | Directly connected to input connector       |
|    13 | DIO5          | Directly connected to input connector                       |    14 | AIN0         | Directly connected to input connector       |
|    15 | AIN1          | Directly connected to input connector                       |    16 | AIN2         | Directly connected to input connector       |
|    17 | DIO6          | Directly connected to input connector                       |    18 | DIO7         | Directly connected to input connector       |
|    19 | EN_16MHZ_OUT  | Enable signal for 16MHz clock output of the TMC8460         |    20 | DIO9         | Directly connected to input connector       |
|    21 | DIO10         | Directly connected to input connector                       |    22 | DIO11        | Directly connected to input connector       |
|    23 | CLK_16MHZ_OUT | 16MHz output of the TMC8460 as clock source for drivers     |    24 | MFC_SPI_CSN1 | Low active chip select of MFC SPI channel 1 |
|    25 | MFC_SPI_CSN2  | Low active chip select of MFC SPI channel 2                 |    26 | MFC_SPI_CSN3 | Low active chip select of MFC SPI channel 3 |
|    27 | MFC_SPI_SCK   | MFC SPI master clock output                                 |    28 | MFC_SPI_MISO | MFC SPI master data input                   |
|    29 | MFC_SPI_MOSI  | MFC SPI master data output                                  |    30 | MFC_SPI_CSN0 | Low active chip select of MFC SPI channel 0 |
|    31 | MFC_SPI_SCK   | MFC SPI master clock output                                 |    32 | MFC_SPI_MOSI | MFC SPI master data output                  |
|    33 | MFC_SPI_MISO  | MFC SPI master data input                                   |    34 | MFC_GPIO[0]  | MFC GPIO Bit 0                              |
|    35 | MFC_GPIO[1]   | MFC GPIO Bit 1                                              |    36 | MFC_GPIO[2]  | MFC GPIO Bit 2                              |
|    37 | MFC_GPIO[3]   | MFC GPIO Bit 3                                              |    38 | MFC_GPIO[4]  | MFC GPIO Bit 4                              |
|    39 | MFC_GPIO[5]   | MFC GPIO Bit 5                                              |    40 | MFC_GPIO[6]  | MFC GPIO Bit 6                              |
|    41 | MFC_GPIO[7]   | MFC GPIO Bit 7                                              |    42 | +5V_VM       | 5V, only connected to input connector       |
|    43 | GND           | Ground                                                      |    44 | GND          | Ground                                      |

Signals  marked  in  light  red  are  only  connected  between  the  MCU  control  input  connector  and  the Driver control output connector.

## 1.1.5 Extended control feature connector

The extended control feature connector is a male 2x15pin header 0.1'/2.54mm pitch. On this header, some additional I/Os of the TMC8460 are available.

|   Pin | Signal              | Description                 |   Pin | Signal   | Description   |
|-------|---------------------|-----------------------------|-------|----------|---------------|
|     1 | MFC_PWM_PULSE_START | Pulse at start of PWM cycle |     2 | GND      | Ground        |

Table 3 - Signal list for Extended control feature connector

|   3 | MFC_PWM_PULSE_CENTER   | Pulse at center of PWM cycle                                        |   4 | +3V3          | 3.3V supply                        |
|-----|------------------------|---------------------------------------------------------------------|-----|---------------|------------------------------------|
|   5 | MFC_PWM_PULSE_A        | Pulse at configurable point A in PWM cycle                          |   6 | MFC_PWM_LS_0  | MFC PWM channel 0, low side        |
|   7 | MFC_PWM_PULSE_B        | Pulse at configurable point B in PWM cycle                          |   8 | MFC_PWM_HS_0  | MFC PWM channel 0, high side       |
|   9 | MFC_PWM_PULSE_A_B      | Pulses at configurable points A&B in PWM cycle                      |  10 | MFC_PWM_LS_1  | MFC PWM channel 1, low side        |
|  11 | RESET_OUT              | Reset output from TMC8460                                           |  12 | MFC_PWM_HS_1  | MFC PWM channel 1, high side       |
|  13 | nRST_IN                | Low active reset input for TMC8460                                  |  14 | MFC_PWM_LS_2  | MFC PWM channel 2, low side        |
|  15 | GND                    | Ground                                                              |  16 | MFC_PWM_HS_2  | MFC PWM channel 2, high side       |
|  17 | MFC_nES_HEADER         | Low active emergency switch signal, controlled by external hardware |  18 | MFC_SD_STP    | MFC Step/Dir unit Step output      |
|  19 | +3V3                   | 3.3V supply                                                         |  20 | MFC_SD_DIR    | MFC Step/Dir unit Direction output |
|  21 | MFC_ABN_A              | MFC ABN decoder A- input                                            |  22 | LATCH_IN0     | Distributed Clock Latch Signal 0   |
|  23 | MFC_ABN_B              | MFC ABN decoder B- input                                            |  24 | LATCH_IN1     | Distributed Clock Latch Signal 1   |
|  25 | MFC_ABN_N              | MFC ABN decoder N- input                                            |  26 | CLK_16MHZ_OUT | 16MHz clock output                 |
|  27 | +5V_USB                | 5V Supply voltage from USB                                          |  28 | GND           | Ground                             |
|  29 | GND                    | Ground                                                              |  30 | CLK_25MHZ     | 25MHz clock output                 |

## 1.1.6 Service connector

This connector is only for test purposes.

Pins 2 and 10 can be used as GND testpoints.

Pins 6 and 7 can be used as +3V3 testpoints.

## 1.2 I/O voltages

The I/O voltages on all connectors are 3.3V, which must not be exceeded.

The signals MFC\_nES\_HEADER, MFC\_ABN\_A, MFC\_ABN\_B and MFC\_ABN\_N have additional overvoltage protection, however it is not recommended to exceed 3.3V.

## 2 Configuration solder jumpers

Between  the  TMC8460-BI  and  the  Extended  control  feature  connector  are  four  solder  jumpers  for configuration of certain features of the TMC8460.

## 2.1 nES Source

The jumper labelled nES SOURCE has the options µC and EXT . It is used to select the source of the Emergency Switch.

µC connects  the  nES  Pin  of  the  TMC8640  to  MFC\_nES\_MCU  on  pin  23  of  the  MCU  control  input connector.

EXT connects  the  nES  Pin  of  the  TMC8640  to  MFC\_nES\_HEADER  on  pin  17  of  the  Extended  control feature connector.

## 2.2 PDI/MFC CTRL SPI bus sharing

The jumper labelled PDI SPI enables resource saving on the MCU side. If set to 1, the PDI SPI data and clock lines are also used for the MFC control SPI. The multiplexing is done via the nCS of both slaves.

Table 4 - Signal mapping for shared SPI bus

|                   | Jumper setting    | Jumper setting                                                                |
|-------------------|-------------------|-------------------------------------------------------------------------------|
| Signal            | 0                 | 1                                                                             |
| PDI_SPI_CSN       | PDI_SPI_CSN       | PDI_SPI_CSN                                                                   |
| PDI_SPI_SCK       | PDI_SPI_SCK       | PDI_SPI_SCK and MFC_CTRL_SPI_SCK                                              |
| PDI_SPI_MOSI      | PDI_SPI_MOSI      | PDI_SPI_MOSI and MFC_CTRL_SPI_MOSI                                            |
| PDI_SPI_MISO      | PDI_SPI_MISO      | PDI_SPI_MISO when PDI_SPI_CSN = 0 MFC_CTRL_SPI_MISO when MFC_CTRL_SPI_CSN = 0 |
| MFC_CTRL_SPI_CSN  | MFC_CTRL_SPI_CSN  | MFC_CTRL_SPI_CSN                                                              |
| MFC_CTRL_SPI_SCK  | MFC_CTRL_SPI_SCK  | Unused                                                                        |
| MFC_CTRL_SPI_MOSI | MFC_CTRL_SPI_MOSI | Unused                                                                        |
| MFC_CTRL_SPI_MISO | MFC_CTRL_SPI_MISO | Unused                                                                        |

## 2.3 Device Emulation

The jumper labelled PDI EMU enables the ESC device emulation when set to 1. In this case a MCU is not necessary. The configuration in the EEPROM must match the configuration set on this jumper.

## 2.4 Reset out polarity

The jumper labelled RESET OUT POL determines the active polarity of the RESET\_OUT signal available on the Extended control feature connector.

## 3 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support  systems,  without  the  specific  written  consent  of  TRINAMIC  Motion  Control  GmbH &amp;  Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed  for  the  consequences  of  its  use  nor  for  any  infringement  of  patents  or  other rights  of  third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 4 Revision History

Table 5: Documentation Revisions

| Version   | Date        | Author   | Description      |
|-----------|-------------|----------|------------------|
| V100      | 2015-JUL-24 | SL       | Initial Document |