<!-- lastmod 2022-08-03 -->
## MAX30003WING Expansion Board

## General Description

The  MAX30003WING  is  an  expansion  board  designed to help engineers and students alike to rapidly prototype ECG  applications  for  wearables  using  the  MAX30003 biopotential analog front end. The form factor is a small 0.9in  by  2.0in  dual-row  header  footprint  that  is  compatible  with  breadboards  and  featherboards  from  Maxim and  Adafruit®,  as  well  as  additional  expansion  boards called wings. Two grove connectors and a 6-pin Pmod™ connector are also included for additional connectivity to popular  development  boards  offered  by  Seeed  Studio® and Digilent®.

## Ordering Information appears at end of data sheet.

Adafruit is a registered trademark of Adafruit Industries.

Digilent is a registered trademark and Pmod is a trademark of Digilent Inc.

Seeed Studio is a registered trademark Seeed Technology Co., Ltd.

## MAX30003WING Expansion Board Photo

<!-- image -->

<!-- image -->

## Features

- Expansion Board
- 0.9in x 2.0in DIP Form Factor
-  Breadboard Compatible
-  Feather Compatible
-  6-Pin PMOD Compatible Socket
-  I 2 C
-  Two Optional GPIO
- Two Grove Connectors
-  I 2 C
- UART
-  3.5mm Jack for ECG Leads
- MAX30003 Biopotential AFE
- Clinical-Grade ECG AFE with High-Resolution Data Converter
- -15.5 Bits Effective Resolution with 5μV P-P  Noise
- Longer Battery Life Compared to Competing Solutions
- -85μW at 1.1V Supply Voltage
- Built-In Heart Rate Detection with Interrupt Feature
-  Eliminates the Need to Run HR Algorithm on the Microcontroller
-  Robust R-R Detection in High-Motion Environment at Extremely Low Power
- 32-Word FIFO Allows You to Wake Up Microcontroller Every 256ms with Full ECG Acquisition

Evaluates: MAX30003

Biopotential AFE

## MAX30003WING Expansion Board

## Detailed Description

The  MAX30003WING  expansion  board  is  designed  to provide  a  compact  rapid  development  platform  for  the MAX30003  biopotential  AFE.  A  3.5mm  jack  has  been provided for prototyping with ECG leads that support this interface.  Two  4-pin  grove  connectors  allow  for  integration of additional I 2 C and UART sensors from the Seeed Studio  Grove  ecosystem.  The  dual  inline  pinout  and form-factor for this board are based on the Adafruit featherboard series, and it is intended to be compatible with many of their boards, but it is not guaranteed to work with all of them.

## Firmware Development

The simplest way to develop firmware for the MAX3003WING is through the Mbed™ development site. At the Mbed site, import examples into the online IDE, then edit, compile, and load  them  into  the  Mbed-compatible  featherboard  without installing  any  software.  Go  to https://os.mbed.com/platforms/MAX32620FTHR/ to  get  started  programming  with the  MAX32630FTHR  now.  To  support  software  development  with  the  MAX30003,  an  example  library  has  been developed and can be found at the following link: https:// os.mbed.com/teams/MaximIntegrated/code/MAX30003/ .

Figure 1. DIP Pinout

<!-- image -->

## Evaluates: MAX30003 Biopotential AFE

Additionally,  the  two  demo  programs  have  been  developed  to  expedite  prototyping.  The  MAX30003WING\_ Demo\_Debug  program  notifies  the  user  that  there has  been  an  interrupt,  calculates  heart  rate,  displays the  status  register,  FIFO  data,  and  ETAG  result.  The MAX30003WING\_Demo\_Debug program can be found at the  following  link: https://os.mbed.com/teams/MaximIntegrated/code/MAX30003WING\_Demo\_Debug/ .  The MAX30003WING\_Demo\_QRS program serially streams FIFO data to be plotted by a serial plotter of the user's choosing.  The  MAX30003WING\_Demo\_QRS  program reproduces the recorded QRS complex and can be found at the following link: https://os.mbed.com/teams/MaximIntegrated/code/MAX30003WING\_Demo\_QRS/ . For information  on  how  to  start  using  the  MAX30003WING, refer to the Application Note 6556: How to Interface the MAX30003WING  ECG  AFE  with  the  MAX32630FTHR located in the Design Resource tab of the product page.

## Table 1. DIP Header H1 Pins

| PIN        | PORT   | DESCRIPTION                         |
|------------|--------|-------------------------------------|
| 1, 3, 5-10 | N.C.   | No Connection                       |
| 2          | 3V3    | 3.3V supply voltage                 |
| 4, 16      | GND    | Ground                              |
| 11         | SCK    | MAX30003 SCLK                       |
| 12         | MOSI   | MAX30003 SDI                        |
| 13         | MISO   | MAX30003 SDO                        |
| 14         | Rx     | UART Receive (with respect to MCU)  |
| 15         | Tx     | UART Transmit (with respect to MCU) |

## Table 2. DIP Header H3 Pins

| PIN   | PORT   | DESCRIPTION                                              |
|-------|--------|----------------------------------------------------------|
| 1-5   | N.C.   | No Connection                                            |
| 6     | INT2B  | Default No Connection. Install 0Ω resistor R6 for INT2B. |
| 7     | INTB   | MAX30003 Interrupt                                       |
| 8     | SSEL   | MAX30003 CSB                                             |
| 9     | EN     | PMOD Enable                                              |
| 10    | INT1   | PMOD Interrupt                                           |
| 11    | SCL    | PMOD/Grove I 2 C SCL                                     |
| 12    | SDA    | PMOD/Grove I 2 C SDA                                     |

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

│

## MAX30003WING Expansion Board

Figure 2. PMOD/Grove Connectors

<!-- image -->

Evaluates: MAX30003

## Table 3. PMOD Socket H2 Pins

|   PIN | PORT   | DESCRIPTION               |
|-------|--------|---------------------------|
|     1 | EN     | Optional Enable (GPIO)    |
|     2 | INT1   | Optional Interrupt (GPIO) |
|     3 | SCL    | I 2 C Serial Clock        |
|     4 | SDA    | I 2 C Serial Data         |
|     5 | GND    | Ground                    |
|     6 | 3V3    | 3.3V Supply (Output)      |

## Table 4. Grove Socket H4 Pins

|   PIN | PORT   | DESCRIPTION                         |
|-------|--------|-------------------------------------|
|     1 | Rx     | UART Receive (with Respect to MCU)  |
|     2 | Tx     | UART Transmit (with Respect to MCU) |
|     3 | 3V3    | 3.3V Supply (Output)                |
|     4 | GND    | Ground                              |

## Table 5. Grove Socket H5 Pins

|   PIN | PORT   | DESCRIPTION          |
|-------|--------|----------------------|
|     1 | SCL    | I 2 C Serial Clock   |
|     2 | SDA    | I 2 C Serial Data    |
|     3 | 3V3    | 3.3V Supply (output) |
|     4 | GND    | Ground               |

## Ordering Information

| PART          | TYPE            |
|---------------|-----------------|
| MAX30003WING# | Expansion Board |

#Denotes RoHS compliance.

│

## MAX30003WING EV Kit Bill of Materials

|   QTY | REF_DES              | MFG                 | PART NUMBER        | DESCRIPTION                                                                                             |
|-------|----------------------|---------------------|--------------------|---------------------------------------------------------------------------------------------------------|
|     5 | C1, C2, C4, C10, C11 | SAMSUNG             | CL05B105KQ5NQNC    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R               |
|     3 | C3, C5, C13          | MURATA              | GRM188R61A106KE69  | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
|     2 | C6, C7               | MURATA              | GRM1555C1H102JA01  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                      |
|     2 | C8, C9               | KEMET               | C0402C100D5GAC     | CAPACITOR; SMT (0402); CERAMIC CHIP; 10PF; 50V; TOL=0.5PF; TG=-55 DEGC TO +125 DEGC; TC=C0G             |
|     1 | C12                  | MURATA              | GRM155R71A104JA01  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R               |
|     1 | H2                   | SAMTEC              | SSQ-106-02-T-S-RA  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; RIGHTANGLE; 6PINS                             |
|     1 | J1                   | SWITCHCRAFT         | 35RASMT2BHNTRX     | CONNECTOR; FEMALE; SMT; 3.5MM PHONE JACK; RIGHTANGLE; 3PINS                                             |
|     2 | R3, R4               | YAGEO               | RC0603FR-0749K9L   | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                |
|     1 | R5                   | SAMSUNG ELECTRONICS | RC1608J000CS       | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                    |
|     1 | R7                   | VISHAY DALE         | CRCW0603499KFK     | RESISTOR; 0603; 499K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                  |
|     1 | U1                   | MAXIM               | MAX1726EUK18+      | IC; REG; 12V; ULTRA-LOW IQ; LOW-DROPOUT LINEAR REGULATOR; SOT23-5                                       |
|     1 | U2                   | MAXIM               | MAX30003CTI+       | IC; AFEC; ULTRA-LOW POWER; SINGLE-CHANNEL INTEGRATED BIOPOTENTIAL (ECG R TO R DETECTION) AFE; TQFN28-EP |
|     1 | Y1                   | SARONIX             | KX3211A0032.768000 | CRYSTAL; SMT 3.2X2.5; 15PF; 32.768KHZ; +/-20PPM; +/-50PPM                                               |

│

Evaluates: MAX30003

Biopotential AFE

## MAX30003WING Expansion Board

## MAX30003WING EV Kit Schematic

<!-- image -->

│

Evaluates: MAX30003

## MAX30003WING Expansion Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplieG. Ma[iP IntegrateG reserves the right to change the circuitry anG speci¿cations without notice at any tiPe.

│

Evaluates: MAX30003

Biopotential AFE