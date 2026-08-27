<!-- lastmod 2022-08-03 -->
## MAXQ76 Evaluation Kit

## General Description

The  MAXQ7667  evaluation  kit  (EV  kit)  demonstrates distance measurement with the MAXQ7667.

The EV kit includes Windows XP ® -, Windows Vista ® -, and Windows ®  7-compatible software for distance measurements data acquisition through a USB cable.

## Features

- Windows XP-, Windows Vista-, and Windows 7Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered (External Power Supply Not Required)
- Real-Time Data Acquisition through the USB

Ordering Information appears at end of data sheet.

Figure 1. MAXQ7667 EV-Kit Block Diagram

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Quick Start

The EV kit board is a plug-n-play, ultrasound echo acquisition  kit  that  connects  to  the  PC  through  a  USB  cable. The EV kit  produces an ultrasound burst and samples the echo and sends the information back to the PC. Distance to multiple objects can be calculated from the echo. The board  does  not  require  external  power;  it  is  powered through the USB. The USB-to-serial driver can be downloaded from www.ftdichip.com/Drivers/VCP.htm.

The  EV  kit  is  preloaded  with  default  firmware  that communicates with the MAXQ7667 evaluation software. Software can be installed and run on any Windows-based system.

Evaluates: MAXQ76

<!-- image -->

## Detailed Description

The  MAXQ7667  EV  kit  board  is loaded with the MAXQ7667,  Maxim's  integrated  ultrasound  acquisition system.  It  integrates  a  microcontroller,  ultrasound  burst generator, and ultrasound echo receive path. It also integrates power management, a 5-channel 12-bit SAR ADC as  auxiliary  analog  input,  brown-out  detection,  GPIOs, UART, SPI port, timers, and a watchdog.

On  the  EV  kiit,  the  MAXQ7667  communicates  through UART to a USB-to-UART bridge.

This  USB-to-UART  bridge  communicates  to  the  PC.  A GUI that shows the echoes and allows control over the part is available.

The MAXQ7667  microcontroller is preloaded with firmware  that  communicates  with  the  MAXQ7667  GUI application.  Upon  receiving  the  logging  command  from the GUI, it sends an ultrasound burst and then acquires the echo using the echo receive path and the Sigma-Delta ADC. The data is sent back to the PC through UART for display and further analysis.

## Components of the EV Kit

The EV kit comes with the following components:

- 1)  MAXQ7667 evaluation board
- 2)  USB cable
- 3)  MAXQ7667 GUI application

## Data Acquisition through  the EV Kit

The following steps are needed to acquire data through the EV kit:

- 1)  Connect the EV kit board to the PC through the USB cable. The EV kit board receives power from the USB.
- 2)  Install and run the MAXQ7667 GUI application.
- 3)  The  GUI  automatically  detects  the  EV  kit  and  starts sending bursts and receiving the echoes. The echo is displayed as a graph.

Evaluates: MAXQ7667

Figure 2. MAXQ7667 GUI Application

<!-- image -->

## EV Kit Extended Features

The EV kit includes options for a single transducer or a dual transducer. The MAXQ7667 allows the user to work with one transducer (for transmit and receive) or with two transducers (one for transmit and one for receive). Using one  transducer  is  cheaper  and  the  solution  becomes smaller;  however,  the  transducer  cannot  receive  while  it is  still  ringing  from  the  excitation  during  transmit.  There are different transducers on the market with different ring times, but typically when using one transducer you cannot measure  distances  smaller  than  appriximately  20cm  to 40cm (the EV kit transducer is ringing for ~ 40cm).

To  use  one  transducer,  make  sure  only  TRANSD1  is mounted and TRANSD2 is not mounted on the PCB. R21 and R22 must also be populated with 0Ω resistors and R23 left open.

## Table 2. EV Kit Connector JP2 Description

|   JP2 PIN # | LABEL   | FUNCTION                                                                                                                                                                                                      |
|-------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           1 | +       | External transducer 1 + (only if on-board transducer is removed). If R21 and R22 are populated, then transmit and receive. Do not mount transducer 2 in that case (R23 should not be populated in that mode). |
|           2 | -       | External transducer 1 - (only if on-board transducer is removed). If R21 and R22 are populated, then transmit and receive. Do not mount transducer 2 in that case (R23 should not be populated in that mode). |

To  use  two  transducers,  make  sure  TRANSD1  and TRANSD2 are populated. R21 and R22 have to be open and R23 has to be populated.

The MAXQ7667 can be powered with an external supply voltage up to 25V. To do that, make sure thar R1 and R2 are open (not populated). You can then supply external supply to JP1.

## Table 1. EV Kit Connector JP1 Description

|   JP1 PIN # | LABEL   | FUNCTION                                                            |
|-------------|---------|---------------------------------------------------------------------|
|           1 | V+      | If R2 is not mounted, 6V to 25V supply. If R2 is mounted, 5V supply |
|           2 | GND     | Ground pin.                                                         |

## Table 3. EV Kit Connector JP3 Description

|   JP3 PIN # | LABEL   | FUNCTION                                                                                                                                   |
|-------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------|
|           1 | +       | External transducer 2 + (only if on-board transducer is removed). Use transducer 2 only if R22 is mounted and R21 and R22 are not mounted. |
|           2 | -       | External transducer 2 - (only if on-board transducer is removed). Use transducer 2 only if R22 is mounted and R21 and R22 are not mounted. |

## MAXQ7667 Evaluation Kit

Table 4. EV Kit Connector J5 Description

|   J5 PIN # | LABEL              | FUNCTION                                         |
|------------|--------------------|--------------------------------------------------|
|          1 | DVDDIO             | 5V DVDDIO supply (output up to ~150mA)           |
|          2 | AVDD               | 3.3VAVDD supply (output up to ~30mA)             |
|          3 | P1.4 / MOSI        | GPIO port 1 bit 4 or SPI MOSI                    |
|          4 | AIN1               | Analog In 1 for SARADC                           |
|          5 | P1.5 / MISO        | GPIO port 1 bit 5 or SPI MISO                    |
|          6 | AIN0               | Analog In 0 for SARADC                           |
|          7 | P1.6 / SCLK        | GPIO port 1 bit 6 or SPI SCLK                    |
|          8 | P0.2               | GPIO port 0 bit 2                                |
|          9 | P1.7 / SS          | GPIO port 1 bit 7 or SPI CS                      |
|         10 | P0.3 / T0 / ADCCTL | GPIO port 0 bit 3 or Timer0 or ADC control input |
|         11 | P0.4 / T0B         | GPIO port 0 bit 4 or Timer0                      |
|         12 | GND                | Ground pin                                       |

## Component List

| DESIGNATION                  |   QTY | DESCRIPTION                                    |
|------------------------------|-------|------------------------------------------------|
| C1, C4                       |     2 | 10µF ±10%, 16V X5R ceramic capacitors (0805)   |
| C2, C3, C6, C7, C11-C18, C31 |    13 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603)  |
| C5                           |     1 | 2.2µF ±10%, 25V X5R ceramic capacitor (0805)   |
| C19, C20                     |     2 | 0.47µF ±10%, 25V X7R ceramic capacitors (0805) |
| C21                          |     1 | 330pF ±10%, 50V X7R ceramic capacitor (0603)   |
| C22                          |     1 | 0.033µF ±10%, 16V X5R ceramic capacitor (0603) |
| C23, C24                     |     2 | 470pF ±10%, 200V ceramic capacitors (0805)     |
| C25, C26                     |     2 | 0.01µF ±5%, 25V C0G ceramic capacitors (0603)  |

Evaluates: MAXQ7667

Table 5. EV Kit Connector JTAG Description

|   JTAG PIN # | LABEL   | FUNCTION                          |
|--------------|---------|-----------------------------------|
|            1 | TCK     | Test clock                        |
|            2 | GND     | Digital ground pin                |
|            3 | TDO     | Test data output                  |
|            4 | +5      | Supply voltage for reference only |
|            5 | TMS     | Test mode select                  |
|            6 | RST     | Microcontroller MAXQ610 reset pin |
|            7 | N.C.    | No connect                        |
|            8 | N.C.    | No connect                        |
|            9 | TDI     | Test data Input                   |
|           10 | GND     | Digital ground pin                |

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| C27, C28      |     2 | 470pF ±5%, 50V C0G ceramic capacitors (0603) |
| C29, C30      |     2 | 22pF ±5%, 25V NP0 ceramic capacitors (0603)  |
| D2            |     1 | BAS28 high-speed dual diode (SOT143)         |
| D4            |     1 | MBRS140T3G Schottky diode (SMB)              |
| IC1           |     1 | Ultrasound PSoC Maxim MAXQ7667AACM/V+        |
| IC2           |     1 | FT232RQ FTDI USB-to-UART (QFN)               |

│

## MAXQ7667 Evaluation Kit

## Component List (continued)

| DESIGNATION         |   QTY | DESCRIPTION                           |
|---------------------|-------|---------------------------------------|
| LED1                |     1 | Green LED LG L29K-G2J1-24-Z           |
| LED2                |     1 | Yellow LED LY L29K-H1K2-26-Z          |
| LED3                |     1 | Red LED LS L29K-G1J2-1-Z              |
| PTC                 |     1 | 4.7kΩ ERA-S27J472V Panasonic PTC 0805 |
| Q1                  |     1 | 16MHz crystal Package: FA-20H         |
| R1-R4, R9, R10, R23 |     7 | 0Ω resistors (0603)                   |
| R5-R7               |     3 | 3.24kΩ ±1%, resistors (0402)          |
| R8                  |     1 | 100Ω ±1% resistor (0603)              |
| R9-R10              |     2 | 0Ω ±1% resistors (0603)               |
| R11                 |     1 | 10kΩ ±5% resistor (0603)              |

Evaluates: MAXQ7667

| DESIGNATION      |   QTY | DESCRIPTION                             |
|------------------|-------|-----------------------------------------|
| R12              |     1 | Res, ±5%, 6.8kΩ, 0603                   |
| R13              |     1 | 8.25kΩ ±1% resistor (0603)              |
| R14              |     1 | 1.78kΩ ±1% resistor (0603)              |
| R15              |     1 | 24.0kΩ ±1% resistor (0603)              |
| R16, R17         |     2 | 0Ω resistors (1206)                     |
| R24              |     1 | 49.9Ω ±1% resistor (0805)               |
| R25              |     1 | 1.00kΩ ±1% resistor (0603)              |
| T1               |     1 | BSP129 n-channel MOSFET (SOT223)        |
| T2               |     1 | IRLML6346PBF n-channel MOS- FET (SOT23) |
| TRANSD1, TRANSD2 |     2 | 16mm, 40kHz transducers                 |
| TR1              |     1 | K4000004 transformer                    |
| X2               |     1 | MINI-USB connector (Type B)             |
| RESET            |     1 | 6.2mm x 6.5mm SMD button                |
| -                |     1 | PCB: MAXQ7667 EV Kit                    |

Evaluates: MAXQ7667

Figure 3. MAXQ7667 EV Kit Schematic

<!-- image -->

│

## MAXQ7667 Evaluation Kit

Figure 4. MAXQ7667 Component Placement Guide -Component Side

<!-- image -->

。

Figure 5. MAXQ7667 Component Placement Guide -Solder Side

<!-- image -->

## Evaluates: MAXQ7667

Figure 6. MAXQ7667 PCB Layout -Component Side

<!-- image -->

Figure 7. MAXQ7667 PCB Layout -Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAXQ7667EVKIT+ | EV Kit |

+ Denotes lead(Pb)-free and RoHS-compliant.

Evaluates: MAXQ7667

## MAXQ7667 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 9/13            | Initial release           | -               |
|                 1 | 5/14            | New version of data sheet | All             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to FhanJe the FirFuitr\ and speFi¿Fations without notiFe at an\ time.

│

Evaluates: MAXQ7667