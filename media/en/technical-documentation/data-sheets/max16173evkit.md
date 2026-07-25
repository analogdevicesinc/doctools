<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX16173

## General Description

The MAX1673 evaluation kit (EV kit) is designed to evaluate the MAX16173, an automotive protection IC with up to 250kHz active rectification in a 10-pin TDFN package. Several  test  points  are  provided  for  device  evaluation. The EV kit is fully assembled and tested over the automotive temperature range of -40°C and +125°C, and is available with the MAX16173ATB installed.

## Benefits and Features

- -42V to +65V Protection Voltage Range
- 3V to 50V Operating Voltage Range
- PCB Pads for Optional TVS Diodes
- Proven 2-Layer 2oz Copper PCB Layout
- Automotive Temperature Range: -40°C and +125°C
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX16173 EV kit
- ±25V, 10A DC Power Supply
- 5V, 100mA DC Power Supply
- Electronic Load
- Two Digital Voltmeters (DVM1, DVM2)
- 4-Channel Oscilloscope

## Procedure

The  EV  kit is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

CAUTION: Do not turn on power supply until all connections are completed.

©

Click here to ask an associate for production status of specific part numbers.

## MAX16173 Evaluation Kit

- 1) Verify the jumper (JP1) is in its default position (Table 1) .
- 2) Connect the positive terminal of the ±25V DC power supply to the VIN banana jack connection and nega -tive terminal to the PGND banana jack connection.
- 3) Connect the positive terminal of the 5V DC power supply to VEXT and negative terminal to the GPND banana jack connection.
- 4) Connect the positive terminal of the electronic load to the VOUT banana jack connection and negative terminal to the PGND banana jack connection.
- 5) Connect the positive terminal of DMV1 to the test point GATE and negative terminal to the test point VIN.
- 6) Connect the positive terminal of DVM2 from the test point SRC and negative terminal to DRN to monitor the voltage across the external MOSFET.
- 7) Connect channel one of the oscilloscope to the test point VIN, channel two to GATE, and channel 3 to VOUT to monitor their behavior during EV kit testing and evaluation.
- 8) Turn on the DC power supply at VIN and slowly increase the voltage level to 12V. Monitor the gate voltage on the scope to be slightly above the input voltage VIN and output voltage VOUT to be very close to VIN. There should be a 20mV difference between VIN and VOUT.
- 9) Measure the voltage reading of the DMV2 to be around 20mV.
- 10) After the proper output voltage is established, increase the load current while monitoring DVM1 and DVM2. DVM1 voltage reading should increase as the load current is increased while DVM2 voltage reading should remain constant.

## Detailed Description

The  MAX16173  EV  kit  evaluates  the  MAX16173,  an ideal diode controller and protection device that protects systems  against  fault  conditions  such  as  reverse  current, reverse voltage, and negative transients, and helps designers to evaluate the operation and performance of MAX16173. The external N-channel MOSFET(Q1) emu -lates  an  ideal  diode  under  the  MAX16173's  control.  A Schottky diode with small forward voltage rating and small reverse current rating (D3) is used to reduce the leakage current of CD and LX pins to optimize the consumption of MAX16173. The Zener diode (D4) is uninstalled. It is an optional feature to clamp the GATE voltage below the MOSFET V(GS) maximum rating.

## Enable Input (EN)

The MAX16173 EV kit provides a jumper (JP1) to enable or disable the MAX16173. See Table 1 for the JP1 jumper settings.  Pulling  EN  to  ground  allows  the  MAX16173  to enter the shutdown mode and reduce the device supply current. While in shutdown, the power can still flow to the load  through  the  body  diode  of  the  external  MOSFET. Therefore, excessive load current while the device is in shutdown should be avoided to minimize power loss.

## Active Rectifier

When VSRC &lt; VDRN + 20mV, the MAX16173's GATE pin is driven to low and reduces the conduction of MOS (Q1)  until  the  VSRC  is  higher  20mV  than  the  VDRN. This is the regulation operation. When VSRC &lt; VDRN  10mV, the MAX16173's GATE pin is shorted to SRC fast through a small resistance to turn MOS (Q1) off. This is the reverse protection. When VSRC &gt; VDRN + 70mV, the MAX16173's GATE pin is driven to highest as CD voltage

## Component Suppliers

| SUPPLIER              | PHONE NUMBER   | WEBSITE               |
|-----------------------|----------------|-----------------------|
| MURATA                | 770-436-1300   | www.murata.com        |
| TDK                   | 847-803-6100   | www.component.tdk.com |
| STMICROELECTRONICS    |                | www.st.com            |
| PANASONIC             | 800-344-2112   | www.panasonic.com     |
| VISHAY SEMICONDUCTORS | 402-563-6866   | www.vishay.com        |

Note:

Indicate using the MAX16173 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16173EVKIT# | EV Kit |

#Denotes RoHS

Evaluates: MAX1673

to turn external MOS (Q1) on fully until VSRC is not higher 70mV than VDRN. Then, the MAX16173 is back to regu -lation operation. When the VIN is an AC wave input, the MAX16173 works alternately between these three modes and achieves the active rectifier function. The MAX16173 data sheet describes the operation and application information in more detail.

## Power Good Output and FET condition Out -put, PG, and FETOK

The MAX16173 EV kit provides two TPs (PG and FETOK) to  indicate  the  VOUT  condition  and  FET  conditions, respectively. To use the PG and FETOK, VEXT should be supplied by a power source not greater than 5V.

## Optional Components

The EV kit features optional components to facilitate the evaluation  of  the  MAX16173  in  a  system. They  are  the two clamp diodes D1 and D2. If two clamp diodes (D1 and D2) are installed, the EV kit can clamp the positive and negative transients for some automotive standard tests or limit the application's DC input voltage range.

Note: These optional components are not necessary for the proper operation of the MAX16173 but are provided to optimize system operation, facilitate testing, and evaluate the IC.

## Table 1. NR (JP1)

| JP1 SHUNT POSITION   | DESCRIPTION         |
|----------------------|---------------------|
| Short 1 to 2*        | Enabled. VEN = VIN  |
| Short 2 to 3         | Disabled. VEN = GND |

* Default position.

## MAX1673 Evaluation Kit

## MAX16137EV Kit Bill of Materials

| PART                                                        | QTY       | DESCRIPTION                                                                                                                  |
|-------------------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| SHDN , CD, DRN, FETOK, GATE, PG, PGND, SRC, VEXT, VIN, VOUT | 12        | TEST POINT KEYSTONE:5000                                                                                                     |
| C1, C3                                                      | 2         | 1µF, 10%, 100V, X7R MURATA: GRM31CR72A105KA01 TDK: C3216X7R2A105K160AA MURATA: GCH31CR72A105KE01 TAIYO YUDEN: HMK316B7105KLH |
| C2, C5                                                      | 2         | 0.1µF, 10%, 100V, X7R KEMET: C1206C104K1RAC TDK: C3216X7R2A104K160AA MURATA: GRM319R72A104KA01                               |
| C4                                                          | 1         | 1µF, 10%, 50V, X7R, CERAMIC MURATA: GRM21BR71H105KA12 SAMSUNG: CL21B105KBFNNN TDK: C2012X7R1H105K085AC                       |
| C6                                                          | 1         | 470µF, 20%, 80V, ALUMINUM-ELECTROLYTIC PANASONIC: EEV-TG1K471M                                                               |
| D3                                                          | 1         | DIODE STMicroelectronics: STPS2H100ZF PANJIT:SS10100FL                                                                       |
| L1                                                          | 1         | INDUCTOR MURATA: LQH3NPN181MGRL                                                                                              |
| PGND, VIN, VOUT                                             | 4         | BANANAJACK EMERSON NETWORK POWER: 108-0740-001                                                                               |
| PGND, VIN, VOUT                                             | 4         | WEICO WIRE: 9020 BUS                                                                                                         |
| Q1                                                          | 1         | MOSFET VISHAY: SQM70060EL_GE3                                                                                                |
| R1, R2                                                      | 2         | 10K; ±5% (0603)                                                                                                              |
| U1                                                          | 1         | MAX16173                                                                                                                     |
| D1                                                          | uninstall | LITTELFUSE: SLD8S36A                                                                                                         |
| D2                                                          | uninstall | STMicroelectronics: SM30T23AY                                                                                                |
| PCB                                                         | 1         | PCB: MAX16173 EVALUATION KIT                                                                                                 |

Evaluates: MAX16173

## MAX16137EV Kit Schematic

Figure 1. MAX16173 EV Kit Schematic

<!-- image -->

## Evaluates: MAX1673

## MAX16137EV Kit PCB Layout

Figure 2. MAX16173 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX16173 EV Kit PCB Layout-Component Side

<!-- image -->

Evaluates: MAX16173

## MAX16137EV Kit PCB Layout (continued)

Figure 4. MAX16173 EV Kit PCB Layout-Bottom Side

<!-- image -->

## Evaluates: MAX1673

## MAX1673 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX16173