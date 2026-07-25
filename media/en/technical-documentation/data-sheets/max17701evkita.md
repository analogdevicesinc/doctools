<!-- lastmod 2022-08-03 -->
<!-- image -->

## Evaluates: MAX17701 in 5V Output-Voltage Application

## General Description

The  MAX17701EVKITA#  (EV  kit)  provides  a  proven design  to  evaluate  the  MAX17701  high-efficiency,  highvoltage, Himalaya synchronous step-down DC-DC supercapacitor charger controller. The EV kit provides constant current (CC) mode and constant voltage (CV) modes to charge supercapacitors. The EV kit is designed to deliver 20A CC mode current (I CHGMAX ) and 5V CV mode voltage (V OUT ) from a 7.1V to 60V input supply. The EV kit supports up to continuous 10A load connected in parallel to supercapacitors at the output. The EV kit is optimized for 24V nominal input voltage application. The switching frequency of the EV kit is set at 350kHz (f SW ) for optimum efficiency and component size. The EV kit features a safety timer (TMR) to set the maximum allowed constant current (CC) mode charging time. For more details about the IC benefits and features, refer MAX17701 IC data sheet.

## Features

- Operates from a 7.1V to 60V Input Supply
- 20A CC Mode Charging Current
- 5V CV Mode Output Voltage
- 350kHz Switching Frequency
- Resistor-Programmable UVLO Threshold
- Input Short Protection
- CC Mode Safety Timer (TMR)
- Cycle-by-Cycle Overcurrent Limit
- External Clock Synchronization (RT/SYNC)
- Charger Status Flags (FLG1, FLG2)
- Charging Current Monitoring (ISMON)
- Output Overvoltage Protection (OVI)
- IC Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

## MAX17701EVKITA# Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17701EVKITA#
- 60V, 20A DC input power supply
- 10A electronic load
- Four digital voltmeters (DVM)
- Digital ammeter (DAM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set electronic load with 10A and disable the electronic load.
- 2) Connect the positive terminal of the electronic load to the VOUT connector and negative terminal of electronic load to the nearest PGND connector.
- 3) Turn on electronic load and discharge supercapacitors till the voltage across the output goes to 0V. Disconnect the electronic load.
- 4) Set the power supply at a voltage between 7.1V and 60V. Disable the power supply.
- 5) Verify that shunts are installed across pins 1-2 on EN/UVLO jumper (J1), pins 1-2 on ILIM jumper (J2), pins 2-3 on TMR jumper (J3). See Table 1, Table 2, and Table 3 for details.
- 6) Connect the positive terminal of the input power supply to the DCIN connector and the negative terminal to the nearest PGND connector.
- 7) Connect the positive terminal of the electronic load to the VOUT connector in series with DAM and the negative terminal to the nearest PGND connector.
- 8) Connect first DVM (DVM1) between the VOUT connector and nearest PGND connector. Connect second DVM (DVM2) between the ISMON PCB pad and nearest SGND PCB pad.
- 9) Connect third DVM (DVM3) between the FLG1 PCB pad and nearest SGND PCB pad. Connect fourth DVM (DVM4) between the FLG2 PCB pad and nearest SGND PCB pad.

319-100560; Rev 4; 1/22

owners.

## MAX17701EVKITA# Evaluation Kit

- 10)  Turn on DC power supply.
- 11)  The charger starts in CC mode. Observe that the DVM2 displays 1.5V, translates to 20A charging current.
- 12)  Verify that the FLG1 voltage displays 0V on DVM3 and FLG2 voltage displays 5V on DVM4, in CC mode.
- 13)  The charger enters CV mode when V FB  reaches CV threshold (1.219V) and the charging current starts to fall from 20A. Observe that the voltage reading in DVM2 falls from 1.5V to 0.75V in CV mode.
- 14)  Verify that both DVM3 and DVM4 displays 0V, in CV mode.
- 15)  Verify that the current reading in DAM is 10A in both CC and CV modes.
- 16)  The charger continues to regulate the output voltage in CV mode and supercapacitors are fully charged. Verify that the DVM1 displays close to 5V.
- 17)  During charging process, verify that the FLG1 voltage displays 0V on DVM3, which shows that there is no fault.
- 18) After testing is completed, switch off the power sup -ply. Remove the electronic load after supercapacitor voltage is discharged to 0V.

## Detailed Description

The MAX17701EVKITA# (EV kit) provides charging solution for supercapacitor with CC mode charging current of 20A and CV mode voltage of 5V from a 7.1V to 60V input supply. The EV kit supports a continuous load current up to 10A at the output. The EV kit features a 350kHz switching  frequency  for  optimum  efficiency  and  component size. The RT/SYNC PCB pad allows an external clock to synchronize the device. The EV kit includes jumper J1 to enable/disable the controller. The FLG1 and FLG2 PCB pads  allows  to  monitor  the  charger  status.  The  ISMON PCB pad allows to monitor charging current.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The EV kit offers an adjustable input undervoltage lockout feature. The EN/UVLO pin can be used to set a desired input voltage at which the charger is enabled or disable the  charger  by  pulling  down  EN/UVLO  to  SGND/EP. Figure  1  shows  the  input  under  voltage  lockout  setting on the  EV  kit.  The  EN/UVLO  pin  can  be  used  as  input undervoltage lockout detector with a typical hysteresis of 160mV. To disable the MAX17701, install a shunt across pins 2-3 on J1. See Table 1 for J1 settings. As shown in

## Evaluates: MAX17701 in 5V Output-Voltage Application

Figure 1, the input at which the charger controller of the IC turns on, can be set with a resistor-divider connected to  EN/UVLO  from  DCIN  to  PGND.  The  V DCIN(MIN)   is selected as 6.8V for this EV kit.

Choose R1 as follows:

<!-- formula-not-decoded -->

where V DCIN(MIN)   is  the  voltage  at  which  the  device  is required to turn on.

Calculate the value of R2 using the following equation:

<!-- formula-not-decoded -->

where:

I EN-BIAS  = Internal bias pullup current on the EN/ULVO pin (3µA)

VEN\_TH\_R  =  EN/UVLO  pin  rising  threshold  voltage (1.25V)

For more details about setting the undervoltage lockout level, refer to the MAX17701 data sheet.

Figure 1. Setting the Input Under Voltage Lockout

<!-- image -->

## Table 1. EN/UVLO Jumper (J1) Settings

*Default position

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                  | MAX17701 OUTPUT                                                         |
|----------|------------------|----------------------------------------------|-------------------------------------------------------------------------|
| J1       | 1-2*             | Connected to the input UVLO divider midpoint | Enabled, UVLO level is set by the resistor divider from DCIN to SGND/EP |
| J1       | 2-3              | Connected to SGND/EP                         | Disabled                                                                |

## MAX17701EVKITA# Evaluation Kit

## CC Mode Charging Current Setting (ILIM)

The  EV  kit  provides  the  CC  mode  charge  current  programming feature. The ILIM PCB pad on the EV kit supports  external  control  of  the  CC  mode  charging  current (I CHGMAX ). See Table 2 for J2 settings. To program the I CHGMAX at 20A, install a jumper across pins 1-2 on J2. In  order  to  control  I CHGMAX   with  an  external  dynamic input,  install  a  jumper  across  pins  2-3  on  J2  and  apply a  voltage  (V ILIM )  between  ILIM  PCB  pad  and  nearest  SGND PCB pad. To program the I CHGMAX  at 10A, remove the jumper on J2. The allowable  voltage  range on V ILIM   is  0.15V-1.5V.  For  more  details  about  the CC Mode Charging Current Setting ,  refer  to  the  MAX17701 IC data sheet.

## External Clock Synchronization (RT/SYNC)

The EV kit provides a RT/SYNC PCB pad to synchronize the MAX17701 to an optional external clock. The external synchronization clock frequency must be between 0.9 x f SW and 1.1 x f SW , where f SW  is the frequency of operation set by R10. In the presence of a valid external clock for  synchronization  for  112  cycles  of  internal  switching clock, the MAX17701 starts to sync in with external clock. For  more  details  about  external  clock  synchronization, refer to the MAX17701 IC data sheet.

## Charger Timers (TMR)

The  EV  kit  features  safety  timer  to  set  the  timeout  in CC mode. The safety timer is  adjusted  by  the  value  of capacitor between TMR and SGND/EP. The default programmed safety timeout on the EV kit is 118sec. If the charger doesn't enter CV mode within 118 seconds, then the charger enters blanking fault. The charger stays idle for  fault  blanking  time  of  472sec  before  restarting  the charging.

## Table 2. ILIM Jumper (J2) Settings

| JUMPER   | SHUNT POSITION   | ILIM PIN                                                 | I CHGMAX       |
|----------|------------------|----------------------------------------------------------|----------------|
| J2       | 1-2*             | Connected to V REF                                       | 20A            |
| J2       | 2-3              | Connected to ILIM PCB pad                                | 13.33 x V ILIM |
| J2       | Not installed    | Connected to ILIM resistor divider (R8 and R9) mid-point | 10A            |

*Default position

## Evaluates: MAX17701 in 5V Output-Voltage Application

The TMR jumper (J3) supports  safety  timer  enable/disable feature. See Table 3 for J3 settings.  In order to disable the safety timer, install a jumper across pins 1-2 on J3. To enable the safety timer setting for 118sec, install a jumper across pins 2-3 on J3. For more details about charger timers, refer to the MAX17701 IC data sheet.

## Charger Status Flags (FLG1, FLG2)

The EV kit provides FLG1 and FLG2 PCB pads to indicate the  charger  status.  See  Table  4  for  charger  status  flag summary.

For  more  details  about  safety  timer  fault  or  hardware faults, refer to the MAX17701 IC data sheet.

## Hot Plug-In and Long Input Cables

The MAX17701EVKITA# PCB layout provides an electrolytic  capacitor  (C15  =  68μF/100V).  This  capacitor  limits the peak voltage at the input of the MAX17701 when the DC input source is 'hot-plugged' to the EV kit input terminals (DCIN) with long input cables. The equivalent series resistance (ESR) of the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter  input  (VIN).  An  electrolytic  capacitor  at  DCIN prevents  the  DCIN  voltage  from  being  less  than  -0.3V during input short events by providing damping with ESR.

## Table 3. TMR Jumper (J3) Settings

| JUMPER   | SHUNT POSITION   | TMR PIN                           | SAFETY TIMER SETTING       |
|----------|------------------|-----------------------------------|----------------------------|
| J3       | 1-2              | Connected to V REF                | Disabled                   |
| J3       | 2-3*             | Connected to TMR capacitor (33nF) | Enabled and set at 118 sec |

*Default position

## Table 4. Charger Status Flags Indications

| CHARGER STATUS                         |   V FLG2 (V) |   V FLG1 (V) |
|----------------------------------------|--------------|--------------|
| Charger Off                            |            5 |            5 |
| CC Mode                                |            5 |            0 |
| CV Mode                                |            0 |            0 |
| Hardware Fault or Safety Timer Timeout |            0 |            5 |

│

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# Performance Report

(VDCIN = 24V, VOUT = 5V, ICHGMAX = 20A, ILOAD = 10A, fSW = 350kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# Performance Report (continued)

(VDCIN = 24V, VOUT = 5V, ICHGMAX = 20A, ILOAD = 10A, fSW = 350kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, CC MODE, I LOAD  = 10A, C16 = 15nF, I CHGMAX  = 20A

<!-- image -->

ILIM TRANSIENT PERFORMANCE V ILIM IS SWITCHED BETWEEN 0.75V AND 1.5V

<!-- image -->

<!-- image -->

<!-- image -->

│

## Component Suppliers

| SUPPLIER                       | WEBSITE                |
|--------------------------------|------------------------|
| Coilcraft, Inc.                | www.coilcraft.com      |
| Murata Americas                | www.murataamericas.com |
| Tacate Group                   | www.tecategroup.com    |
| Panasonic Corp.                | www.panasonic.com      |
| TDK                            | www.tdk.com            |
| Vishay                         | www.vishay.com         |
| Taiyo Yuden                    | www.t-yuden.com        |
| Diodes Inc.                    | www.diodes.com         |
| Yageo Corp.                    | www.yageo.com          |
| KEMET Corporation              | www.kemet.com          |
| SullinsCorp                    | www.sullinscorp.com    |
| Samsung                        | www.samsungsem.com     |
| Comchip Technology Corporation | www.comchiptech.com    |
| Keystone                       | www.keyelco.com        |

Note:

Indicate that you are using the MAX17701 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17701EVKITA# | EV Kit |

#Denotes RoHs compliance.

## MAX17701EVKITA# Bill of Materials

| S. No   | DESIGNATOR                      | DESCRIPTION                                                                                                                               | QUANTITY   | MANUFACTURER PART NUMBER                       |
|---------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------|
| 1       | C1, C9, C10, C19, C20, C22, C25 | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                                                                                           | 7          | MURATA GRM31CZ72A475KE11                       |
| 2       | C2, C11, C27, C42, C43          | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                                                                                           | 5          | TAIYO YUDEN HMK107B7104KA                      |
| 3       | C3, C13, C28, C40, C53, C54     | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)                                                                                            | 6          | TDK C1005C0G2A151J050BA                        |
| 4       | C12, C31, C39                   | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                                                                            | 3          | TAIYO YUDEN EMK105B7104KV                      |
| 5       | C14                             | 10pF, 5%, 50V, COG, Ceramic capacitor (0402)                                                                                              | 1          | KEMET C0402C100J5GACTU                         |
| 6       | C15                             | ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL=20%; MODEL=EEV SERIES                                                                              | 1          | PANASONIC EEV-FK2A680Q                         |
| 7       | C16                             | 0.033µF, 10%, 50V, X7R, Ceramic capacitor (0603)                                                                                          | 1          | SAMSUNG CL10B333KB8NNNC                        |
| 8       | C17                             | 6800pF, 10%, 25V, X7R, Ceramic capacitor (0402)                                                                                           | 1          | YAGEO CC0402KRX7R8BB682                        |
| 9       | C18                             | 68pF, 5%, 50V, C0G, Ceramic capacitor (0402)                                                                                              | 1          | KEMET C0402C680J5GAC                           |
| 10      | C21                             | 4.7µF, 10%, 16V, X7R, Ceramic capacitor (0805)                                                                                            | 1          | MURATA GRM21BR71C475KA73                       |
| 11      | C23                             | 1µF, 10%, 25V, X7R, Ceramic capacitor (0603)                                                                                              | 1          | TAIYO YUDEN TMK107B7105KA                      |
| 12      | C24                             | 1000pF, 10%, 16V, X7R, Ceramic Capacitor (0402)                                                                                           | 1          | SAMSUNG CL05B102KO5NNN                         |
| 13      | C26                             | 0.47µF, 10%, 16V, X7R, Ceramic capacitor (0603)                                                                                           | 1          | MURATA GRM188R71C474K                          |
| 14      | C29, C47                        | 2200pF, 10%, 50V, X7R, Ceramic capacitor (0402)                                                                                           | 2          | MURATA GRM155R71H222KA01                       |
| 15      | C34                             | 220µF, TOL=20%, 6.3V, TANTALUM CHIP                                                                                                       | 1          | PANASONIC 6TCE220MI                            |
| 16      | C36, C37                        | 47µF, 10%, 10V, X7R, Ceramic capacitor (1210)                                                                                             | 2          | MURATA GRM32ER71A476KE15                       |
| 17      | C41                             | 47nF, 10%, 25V, X7R, Ceramic capacitor (0402)                                                                                             | 1          | MURATA GRM155R71E473K                          |
| 19      | D1                              | ZENER DIODE VZ=4.7V; IZ=0.005A                                                                                                            | 1          | COMCHIP CZRU52C4V7                             |
| 20      | D2                              | SCHOTTKY DIODE PIV=100V; IF=1A                                                                                                            | 1          | DIODES INCORPORATED DFLS1100-7                 |
| 21      | L1                              | INDUCTOR, 2.2µH, 32A (10mm x 10mm), 2.8mΩ                                                                                                 | 1          | COILCRAFT XAL1010-222ME                        |
| 22 23   | Q1 Q2, Q3, Q5, Q6               | N-CHANNEL POWER MOSFET(PowerPAK® SO-8) PD-(6.25W); I-(95A); V-(100V) N-CHANNEL POWER MOSFET (PowerPAK® SO-8) PD-(6.25W); I-(60A); V-(80V) | 1 4        | VISHAY SIR170DP-T1-RE3 VISHAY SIR826ADP-T1-GE3 |
| 24      | R1                              | RESISTOR, 64.9KΩ, 1% (0603), 0.1W                                                                                                         | 1          | PANASONIC ERJ-3EKF6492                         |
| 25      | R2                              | RESISTOR, 14KΩ, 1% (0603), 0.1W                                                                                                           | 1          | PANASONIC ERJ-3EKF1402                         |
| 26      | R3                              | RESISTOR, 93.1KΩ, 1% (0402), 0.0625W                                                                                                      | 1          | VISHAY DALE CRCW040293K1FK                     |
| 27      | R4                              | RESISTOR, 28.7KΩ, 1% (0402), 0.0625W                                                                                                      | 1          | VISHAY DALE CRCW040228K7FK                     |
| 28      | R5, R6                          | RESISTOR, 330Ω, 1% (0603), 0.1W                                                                                                           | 2          | VISHAY DALE CRCW0603330RFK                     |
| 29      | R7, R14                         | RESISTOR, 10KΩ, 1% (0402), 0.1W                                                                                                           | 2          | YAGEO PHICOMP RC0402FR-0710KL                  |
| 30      | R8                              | RESISTOR, 105KΩ, 1% (0402), 0.0625W                                                                                                       | 1          | VISHAY DALE CRCW0402105KFK                     |
| 31      | R9                              | RESISTOR, 45.3KΩ, 1% (0402), 0.0625W                                                                                                      | 1          | VENKEL LTD CR0402-16W-4532F                    |
| 32      | R11, R15, R28                   | RESISTOR, 0Ω, 5% (0402), 0.0625W                                                                                                          | 3          | YAGEO PHYCOMP RC0402JR-070RL                   |
| 33      | R12                             | RESISTOR, 15.4KΩ, 1% (0402), 0.1W                                                                                                         | 1          | PANASONIC ERJ-2RKF1542                         |
| 34      | R17-R20                         | RESISTOR, 1Ω, 1% (0402), 0.0625W                                                                                                          | 4          | VISHAY DALE CRCW04021R00FK                     |
| 35      | R26                             | RESISTOR, 40.2Ω, 1% (0402), 0.0625W                                                                                                       | 1          | VISHAY DALE CRCW040240R2FK                     |
| 36      | R27                             | RESISTOR, 0.0025Ω, 1% (2512), 2W                                                                                                          | 1          | VISHAY WSL25122L500FEA18                       |
| 37      | R30                             | RESISTOR, 52.3KΩ, 1% (0402), 0.0625W                                                                                                      | 1          | VISHAY DALE CRCW040252K3FK                     |
| 38      | R31                             | RESISTOR, 17.4KΩ, 1% (0402), 0.0625W                                                                                                      | 1          | YAGEO PHYCOMP RC0402FR-0717K4L                 |
| 39      | SUP1, SUP2                      | SUPERCAPACITOR, 350F, 3V, 4mΩ                                                                                                             | 2          | TECATE GROUP TPLH-3R0/350SS35X61               |
| 40      | U1                              | SYNCHRONOUS STEP-DOWN SUPERCAPACITOR CHARGER CONTROLLER (TQFN24-EP 4mm x4mm)                                                              | 1          | MAX17701ATG+                                   |
| 41      | DCIN, PGND, PGND2, VOUT         | BANANA JACK (5.2mm DIA X 5.5mm LENGTH)                                                                                                    | 4          | KEY STONE 575-4                                |
| 42      | ILIM_EXT                        | TEST POINT, PIN DIA=0.1IN; TOTAL LENGTH=0.3IN;                                                                                            | 1          | KEY STONE 5000                                 |
| 43      | J1-J3                           | 3-pin header (0.1' centers)                                                                                                               | 3          | SULLINS PEC03SAAN                              |
| 44      | -                               | SHUNTS                                                                                                                                    | 3          | SULLINS STC02SYAN                              |
| 45      | L2                              | OPEN: INDUCTOR (10mmx10mm)                                                                                                                | 0          |                                                |
| 46      | D3                              | OPEN: SCHOTTKY DIODE (SMB)                                                                                                                | 0          |                                                |
| 47      | C4-C8, C32, C33, C45, C48-C52   | OPEN: CAPACITOR (1206)                                                                                                                    | 0          |                                                |
| 48      | C30, C46                        | OPEN: CAPACITOR (0402)                                                                                                                    | 0          |                                                |
| 49      | C35                             | OPEN: TANTALUM CAPACITOR (2917)                                                                                                           | 0          |                                                |
| 51      | R10, R29                        | OPEN: RESISTOR (0402)                                                                                                                     | 0          |                                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| J1, J2                 | 1-2                    |
| J3                     | 2-3                    |

## Evaluates: MAX17701 in 5V Output-Voltage Application

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# Schematic

<!-- image -->

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# PCB Layouts

MAX17701EVKITA# EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17701EVKITA# EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX17701 in

│

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# PCB Layouts (continued)

MAX17701EVKITA# EV Kit PCB Layout-Layer 2

<!-- image -->

MAX17701EVKITA# EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX17701 in 5V Output-Voltage Application

│

## MAX17701EVKITA# Evaluation Kit

## MAX17701EVKITA# PCB Layouts (continued)

MAX17701EVKITA# EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX17701EVKITA# EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Evaluates: MAX17701 in 5V Output-Voltage Application

│

## MAX17701EVKITA# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                            | PAGES CHANGED    |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|                 0 | 7/20            | Initial release                                                                                                                                                                                        | -                |
|                 1 | 12/20           | Updated TOC01, and the Bill of Materials, Schematics, and PCB Layout sections                                                                                                                          | 4-11             |
|                 2 | 3/21            | Updated Features, Quick Start, Detailed Description, TOC 1, TOC 11, TOC 12, Component Suppliers, MAX17701EVKITA# Bill of Materials, MAX17701EVKITA# Schematic and MAX17701EVKITA# PCB Layouts sections | 1-12             |
|                 3 | 4/21            | Updated MAX17701EVKITA# Schematic Diagram                                                                                                                                                              | 9                |
|                 4 | 1/22            | Updated General Description , Features , Equipment Setup and Test Procedure , Detailed Description , TOC 1 , TOC 3 , TOC 5 , TOC 14 , Bill of Materials , Schematic, and PCB Layouts                   | 1, 2, 4, 5, 7-11 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX17701 in

5V Output-Voltage Application