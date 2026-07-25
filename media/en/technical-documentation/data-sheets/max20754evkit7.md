<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX20754 and MAX20790

## General Description

This  MAX20754EVKIT7  evaluation  kit  (EV  kit)  demonstrates  the  MAX20754 PMBus™-compatible dual-output multiphase power-supply controller. The controller generates six pulse-width modulated (PWM) control signals, or 'phases.' The MAX20754EVKIT7 EV kit is a two-output design,  with  four  phases  assigned  to  Output  1  and  the remaining  two  phases  assigned  to  Output  2.  Both  outputs  use  coupled  inductor  topologies.  Coupled  inductors reduce the effective inductor value and size without excessive ripple current, reducing required output capacitance, and improving transient response.

The EV kit also demonstrates the MAX20790 power-stage device; there are six MAX20790 devices, one per phase.

## Features

- Optimized for Single +10V to +16V Supply
- Onboard +3.3V Regulator (MAX17501)
- Generates Two Independent Outputs
- Output 1: 4-Phase, 1V, 150A
- Output 2: 2-Phase, 1V, 75A
- 500kHz Switching Frequency
- Independent Enable Switches
- PMBus Configuration and Control
- Compatible with Maxim's PowerTool™ GUI
-  Easy Connection to PC Using MAXPOWERTOOL002 USB-to-SMBus Interface (order separately)
- Status LEDs
-  Power-Good
- Power-Stage Fault
- SMBus Alert
- Proven PCB Layout
- Compensation Scheme Optimized for High Bandwidth
- Fully Tested and Assembled

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

PowerTool is a trademark of Maxim Integrated Products, Inc.

©

## MAX20754EVKIT7 Evaluation Kit

## Quick Start

## Required Equipment

- 12V DC power supply capable of delivering 300W at the desired input voltage
- Windows PC with a spare USB port
- MAXPOWERTOOL002 USB-to-SMBus Interface (order separately)
- Maxim Digital PowerTool GUI software

## Optional Equipment

- AC/DC 'wall adapter' for convenient low-power eval -uation, connecting to J5 on the EV kit. For example:
- CUI p/n ETSA120500UC-P5P-SZ (12V, 5A, 60W max)
- CUI p/n EMSA120300-P5P-SZ (12V, 3A, 40W max)
- 300MHz four-channel oscilloscope
- BNC-to-SMB cables for convenient, low-noise oscilloscope connection to the input and output voltage sense points. For example: CD International Technology p/n BSB-174TPR-3.
- Electronic load capable of sinking 150A at 1V
- Two loads are required to test both outputs simultaneously
- Ask about the Maxim MINILOAD device
- Digital multimeter (DMM)

## EV Kit Board Photo

<!-- image -->

319-100852; Rev 0; 11/21

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX20754EVKIT7 Evaluation Kit

## Procedure

Note: In the following sections, text in bold refers to items directly from the EV kit software.

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Visit the Maxim Integrated website to download and install the latest version of the Digital PowerTool software.
- 2) Connect the USB cable from the PC to the MAX -POWERTOOL002 interface adapter.
- 3) Connect the adapter ribbon cable to the matching header J13 on the EV kit, ensuring that J13-Pin 1 is adjacent to the red wire on the ribbon cable.
- 4) Connect the DC power supply positive lead to J6 and the negative lead to J7 (or use an AC-DC adapter through J5 using a center-positive 2.1mm I.D. x 5.5mm O.D. plug).
- 5) If available, connect the electronic load(s) to the outputs at screw terminals ST1, ST2, ST3, and ST4,

6

## Evaluates: MAX20754 and MAX20790

being careful to observe the VOUT and GND polarity indicated by the silkscreen labels.

- 6) If available, connect the oscilloscope to the EV kit for waveform analysis. Coaxial SMB cable connec -tions J8, J9, and J10 allow low-noise measurement of the input and output ripple waveforms. (Note that the input voltage signal at J8 is resistively attenuated 20:1 to protect oscilloscope inputs.)
- 7) Ensure that jumpers JP1 and JP2 have shunts installed.
- 8) Enable the external 12V supply.
- 9) Enable the onboard MAX17501 12V-to-3.3V sup -ply circuit with switch S5. This supplies 3.3V to the MAX20754, which in turn generates 1.8V power for the MAX20790 power-stage devices.
- 10) Start the GUI software. The 'Dashboard' window should appear as shown in Figure 1 .
- 11)  Enable the MAX20754 outputs by operating switches S2 and S3 on the EV kit, or by setting the OPERA -TION and ON\_OFF\_CONFIG commands in the PowerTool GUI.

Figure 1. Maxim PowerTool Graphical User Interface Software Dashboard Window

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## Detailed Description of Software

The PowerTool software presents system-level information on the Dashboard tab. This view collects basic information for all  Maxim PMBus devices found on the bus. This tab configures sequencing and output voltage levels and presents an overview of the system status. Clicking the Stop Communication button stops all PMBus transactions from the PowerTool GUI. To force detection of all active devices on the bus, click the Search for Devices button.

For  detailed  information  on  a  particular  device,  click  on the  sub-tab  for  that  device's  slave  address.  This  opens a  view  with  a  set  of  further  sub-tabs  specific  to  that device as shown in Figure 2 . The sub-tabs available vary depending on the GUI version and the connected device's capability,  but  typically  include Configuration , Monitor , Faults Set , and PMBus Command .

The Configuration tab presents the most commonly used PMBus  command  data  in  human-readable  form.  The device  status  is  updated  by  continuous  polling  of  these commands. Configuration settings for an individual device can  be  saved  to  or  restored  from  an  external  file.  The PMBus  command  settings  can  be  saved  to  or  restored from the device's internal nonvolatile memory as well.

## Evaluates: MAX20754 and MAX20790

The Monitor tab  shows  continuously updated telemetry data from the device. Rolling plots of output voltage, input voltage, output current, and temperature data are shown, including indication of fault limits relative to the operating point.

The Faults  Set tab  allows  the  user  to  configure  and monitor the status of most protection and warning functions. The fault levels and fault response commands are configured from this tab. The full contents of the STATUS\_ register  commands  are  available  by  clicking  the View Fault/Warning bit by bit button. Fault and warning flags are cleared by clicking the Clear Fault/Warning button, which  sends  the  CLEAR\_FAULTS  PMBus  command  to the device.

The PMBus Command tab shows all supported PMBus commands in a series of sub-tabs, allowing detailed configuration and analysis of the command values. The user can view the command values in a hexadecimal or decimal format by checking or clearing the Force Hex checkbox. The Use PEC checkbox enables or disables Packet Error Checking for all GUI communications. Note that the command data is continuously updated by polling; typing a new value into the text boxes causes the new value to be sent to the device.

Figure 2. Detailed View for One Device; Configuration Sub-Tab

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## Detailed Description of Hardware

The MAX20754EVKIT7 demonstrates a dual-output stepdown power supply solution with one four-phase output and  one  two-phase  output,  both  of  which  make  use  of the coupled inductors. This solution provides high outputcurrent with high efficiency, fast load-transient response, and low ripple and noise.

The  MAX20754  controller  automatically  interleaves  all PWM outputs assigned to a given output at even intervals. The first output is four-phase resulting in 90° timing; the  second  output  is  two-phase  with  180°  timing.  Each PWM signal is connected to one MAX20790 power-stage device, operating in parallel configuration. This configuration is capable of supplying up to 37.5A per phase. Each power-stage  is  in  turn  connected  to  one  winding  of  a coupled inductor.

## Table 1. Jumper JP1

| SHUNT POSITION   | DESCRIPTION                                                  |
|------------------|--------------------------------------------------------------|
| Installed        | MAX17501 +3.3V output connected to MAX20754 V DD3P3 input.   |
| Not installed    | MAX20754 can be powered by an external +3.3V supply at TP35. |

## Table 3. Connector List

| REFERENCE DESIGNATOR   | DESCRIPTION                                                                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J6                     | Input supply positive voltage (+5V to +16V)                                                                                                                                        |
| J7                     | Input supply ground                                                                                                                                                                |
| ST1                    | Rail 1 output positive voltage                                                                                                                                                     |
| ST2                    | Rail 1 output ground                                                                                                                                                               |
| ST3                    | Rail 2 output positive voltage                                                                                                                                                     |
| ST4                    | Rail 2 output ground                                                                                                                                                               |
| J13                    | Header for connection to MAXPOWERTOOL002 USB-to-SMBus interface. Pin 1: SCL Pin 3: SDA Pin 7: ALERT Even-numbered pins: Ground                                                     |
| J8                     | SMB jack for input supply monitoring. This connection has a 1/20 resistive divider with 50Ω back-impedance. Connect to an oscilloscope with 20x scaling and ≥1MΩ input resistance. |
| J9                     | SMB jack for Rail 1 output voltage monitoring. This connection has 50Ω back-impedance. Connect to an oscilloscope with 1x scaling and ≥1MΩ input resistance.                       |
| J10                    | SMB jack for Rail 2 output voltage monitoring. This connection has 50Ω back-impedance. Connect to an oscilloscope with 1x scaling and ≥1MΩ input resistance.                       |
| J5                     | Alternate input supply barrel connector, 2.1mm I.D. x 5.5mm O.D. barrel jack, center-positive. Do not exceed 5A current.                                                           |

## Evaluates: MAX20754 and MAX20790

The MAX20754 controller evenly shares the load current between  phases  in  a  given  output.  The  EV  kit  is  configured  to  operate  both  outputs  at  500kHz  fundamental switching frequency, but can be modified to operate anywhere from 300kHz to 800kHz with appropriate compen -sation network changes. Both outputs are set to supply 1V.  The  maximum  output  current  for  Output  1  is  150A, and for Output 2 is 75A.

The output voltage, output rise-time and fall-time, switching frequency, PMBus address, slope compensation, and maximum output current are set using only five external resistors, allowing simple setup and application configuration that does not require PMBus commands. Refer to the MAX20754 and MAX20790 integrated circuit data sheets for complete details on design and component selection.

## Table 2. Jumper JP2

| SHUNT POSITION   | DESCRIPTION                                                                               |
|------------------|-------------------------------------------------------------------------------------------|
| Installed        | MAX17501 +3.3V output connected to AUX3P3 rail (ENx debounce and status LED logic, etc.). |
| Not installed    | The AUX3P3 rail can be powered by an external +3.3V supply at Pin 2 of JP2.               |

## MAX20754EVKIT7 Evaluation Kit

## Table 3. Connector List

| REFERENCE DESIGNATOR   | FUNCTION                                                                                                                                                                             |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| S5                     | SPDT toggle switch. Enable MAX17501 +3.3V buck regulator to supply V DD3P3 Green light: output enabled                                                                               |
| S4                     | Momentary tactile switch; no function on MAX20754                                                                                                                                    |
| S2                     | SPDT toggle switch. Enable Rail 1 output regulation. Green light: PGOOD1 pin high Amber light: ALERT pin asserted low Red light: FAULT pin asserted low (power stage fault detected) |
| S3                     | SPDT toggle switch. Enable Rail 2 output regulation. Green light: PGOOD2 pin high Amber light: ALERT pin asserted low Red light: FAULT pin asserted low (power stage fault detected) |

## Table 5. Test Points

| REFERENCE DESIGNATOR   | DESCRIPTION                                                                                            |
|------------------------|--------------------------------------------------------------------------------------------------------|
| TP21                   | ALERT signal (open-drain)                                                                              |
| TP20                   | FAULT signal (open-drain)                                                                              |
| TP36                   | SDAsignal (open-drain)                                                                                 |
| TP37                   | SCL signal (open-drain)                                                                                |
| TP17                   | EN1 signal (open-drain)                                                                                |
| TP38                   | EN2 signal (open-drain)                                                                                |
| TP7                    | Input supply positive voltage                                                                          |
| TP8                    | Input supply ground                                                                                    |
| TP19                   | Input voltage sense point for efficiency measurements                                                  |
| TP22                   | Input ground sense point for efficiency measurements                                                   |
| TP18                   | PGOOD1 signal (open drain)                                                                             |
| TP40                   | PGOOD2 signal (open drain)                                                                             |
| TP6                    | PWM0 signal (Rail 2)                                                                                   |
| TP5                    | PWM1 signal (Rail 1)                                                                                   |
| TP4                    | PWM2 signal (Rail 1)                                                                                   |
| TP3                    | PWM3 signal (Rail 1)                                                                                   |
| TP2                    | PWM4 signal (Rail 1)                                                                                   |
| TP1                    | PWM5 signal (Rail 2)                                                                                   |
| TP13                   | Rail 1 loop-response (Bode plot) measurement positive injection point (see MAX20754 EV Kit Schematic ) |
| TP23                   | Rail 1 loop-response (Bode plot) measurement negative injection point (see MAX20754 EV Kit Schematic ) |
| TP25                   | Rail 1 output voltage efficiency measurement point                                                     |
| TP26                   | Rail 1 output ground efficiency measurement point                                                      |

Evaluates: MAX20754 and

## Table 5. Test Points (continued)

| REFERENCE DESIGNATOR               | DESCRIPTION                                                                                            |
|------------------------------------|--------------------------------------------------------------------------------------------------------|
| TP9                                | Rail 1 output voltage feedback sense point (for line/load regulation accuracy measurement with DMM)    |
| TP10                               | Rail 1 output ground feedback sense point (for line/load regulation accuracy measurement with DMM)     |
| TP14                               | Rail 2 loop-response (Bode plot) measurement positive injection point (see MAX20754 EV Kit Schematic ) |
| TP24                               | Rail 2 loop-response (Bode plot) measurement negative injection point (see MAX20754 EV Kit Schematic ) |
| TP27                               | Rail 2 output voltage efficiency measurement point                                                     |
| TP28                               | Rail 2 output ground efficiency measurement point                                                      |
| TP11                               | Rail 2 output voltage feedback sense point (for line/load regulation accuracy measurement with DMM)    |
| TP12                               | Rail 2 output ground feedback sense point (for line/load regulation accuracy measurement with DMM)     |
| TP34                               | V DDS supply; +1.8V power to MAX20790 power stage, from MAX20754 integrated switcher output            |
| TP35                               | V DD3P3 supply; +3.3V power to MAX20754 integrated switcher                                            |
| TP29, TP30, TP31, TP32, TP33, TP39 | Ground                                                                                                 |

## Typical Operating Characteristics

Figure 3. Output 1 Load Transient Response

<!-- image -->

Evaluates: MAX20754 and

## Typical Operating Characteristics (continued)

Figure 4. Output 2 Load Transient Response

<!-- image -->

Figure 5. Output 1 and Output 2 Ripple

<!-- image -->

## Typical Operating Characteristics (continued)

Figure 6. Output 1 Bode Plot

<!-- image -->

Figure 7. Output 2 Bode Plot

<!-- image -->

## Ordering Information

| PART            | TYPE                   |
|-----------------|------------------------|
| MAX20754EVKIT7# | MAX20754 EV Kit        |
| MAXPOWERTOOL002 | USB-to-SMBus Interface |

#Denotes RoHS compliance.

## MAX20754 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                                                                  | VAR STATUS   | MAXINV          | MFG PART #                                                                                                                                | MANUFACTURER                                                                                                                  | VALUE     | DESCRIPTION                                                                                             | COMMENTS   |
|--------|-------|----------------------------------------------------------------------------------------------------------|--------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------------------|------------|
|      1 |     4 | C1, C3-C5                                                                                                | Pref         | 20-0022U-BA44   | GRM188C80G226MEA0                                                                                                                         | MURATA                                                                                                                        | 22UF      | CAP; SMT (0603); 22UF; 20%; 4V; X6S; CERAMIC                                                            |            |
|      2 |    15 | C2, C6, C17, C18, C30, C31, C42, C50, C114-C116, C160- C163                                              | Pref         | 20-000U1-L1A    | ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; | TDK;AMERICAN TECHNICAL CERAMICS;AVK;VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK; YAGEO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF     | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC                                                          |            |
|      3 |     3 | C7, C68, C90                                                                                             | Pref         | 20-0100P-27     | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA                                                 | KEMET;NIC COMPONENTS CORP.; YAGEO PHICOMP;MURATA; TDK;TDK                                                                     | 100PF     | CAP; SMT (0402); 100PF; 5%; 50V; C0G; CERAMIC                                                           |            |
|      4 |     2 | C9, C10                                                                                                  | Pref         | 20-1000P-05     | GRM155R71H102JA01; GCM155R71H102JA37                                                                                                      | MURATA;MURATA                                                                                                                 | 1000PF    | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                          |            |
|      5 |     6 | C11-C16                                                                                                  | Pref         | 20-0068P-27     | C0402C680J5GAC; GRM1555C1H680JA01                                                                                                         | KEMET;MURATA                                                                                                                  | 68PF      | CAP; SMT (0402); 68PF; 5%; 50V; C0G; CERAMIC                                                            |            |
|      6 |     6 | C19, C20, C32, C33, C43, C51                                                                             | Pref         | 20-0001U-B9     | GRM188R60J105KA01                                                                                                                         | MURATA                                                                                                                        | 1UF       | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-0001u-O3    |            |
|      7 |     6 | C21, C22, C35, C36, C44, C53                                                                             | Pref         | 20-00U22-B19    | GRM155R71C224KA12                                                                                                                         | MURATA                                                                                                                        | 0.22UF    | CAP; SMT (0402); 0.22UF; 10%; 16V; X7R; CERAMIC                                                         |            |
|      8 |    12 | C23, C24, C38, C39, C64, C102, C153, C224, C228-C231                                                     | Pref         | 20-0001U-Z6     | GMK107BJ105KA; C1608X5R1V105K080AB                                                                                                        | TAIYO YUDEN;TDK                                                                                                               | 1.0UF     | CAP; SMT (0603); 1.0UF; 10%; 35V; X5R; CERAMIC                                                          |            |
|      9 |     1 | C25                                                                                                      | Pref         | 20-1200P-04C    | CL05B122KB5NNN; GRM155R71H122KA01                                                                                                         | SAMSUNG ELECTRONICS; MURATA                                                                                                   | 1200PF    | CAP; SMT (0402); 1200PF; 10%; 50V; X7R; CERAMIC                                                         |            |
|     10 |     1 | C27                                                                                                      | Pref         | 20-0047U-Y7     | C3216X5R1C476M160AB; GRM31CR61C476ME44                                                                                                    | TDK;MURATA                                                                                                                    | 47UF      | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                           |            |
|     11 |     1 | C28                                                                                                      | Pref         | 20-0220P-BA31   | GRM1555C1H221JA01                                                                                                                         | MURATA                                                                                                                        | 220PF     | CAP; SMT (0402); 220PF; 5%; 50V; C0G; CERAMIC                                                           |            |
|     12 |     4 | C29, C37, C49, C54                                                                                       | Pref         | 20-0U015-12     | C0402X7R250-153KNE; GRM155R71E153KA61; GCM155R71E153KA55                                                                                  | VENKEL LTD.;MURATA;MURATA                                                                                                     | 0.015UF   | CAP; SMT (0402); 0.015UF; 10%; 25V; X7R; CERAMIC; NOTE: PURCHASE DIRECT FROM THE MANUFACTURER           |            |
|     13 |     2 | C40, C112                                                                                                | Pref         | 20-0001U-R1     | GRM188R70J105KA01; CL10B105KQ8NNNC                                                                                                        | MURATA;SAMSUNG ELECTRONICS                                                                                                    | 1.0UF     | CAP; SMT (0603); 1.0UF; 10%; 6.3V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-0001u-63  |            |
|     14 |     1 | C41                                                                                                      | Pref         | 20-3300P-04     | GRM155R71H332KA01                                                                                                                         | MURATA                                                                                                                        | 3300PF    | CAP; SMT (0402); 3300PF; 10%; 50V; X7R; CERAMIC                                                         |            |
|     15 |    18 | C45, C55, C164, C165, C168, C169, C172, C173, C176, C177, C180, C181, C184, C185, C226, C227, C232, C233 | Pref         | 20-4700P-12     | GRM155R71E472KA01                                                                                                                         | MURATA                                                                                                                        | 4700PF    | CAP; SMT (0402); 4700PF; 10%; 25V; X7R; CERAMIC                                                         |            |
|     16 |     1 | C46                                                                                                      | Pref         | 20-1800P-14     | C0402X7R500-182KNP                                                                                                                        | VENKEL LTD.                                                                                                                   | 1800PF    | CAP; SMT (0402); 1800PF; 10%; 50V; X7R; CERAMIC                                                         |            |
|     17 |     1 | C47                                                                                                      | Pref         | 20-1000P-27     | GRM1555C1H102JA01; C1005C0G1H102J050                                                                                                      | MURATA;TDK                                                                                                                    | 1000PF    | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                          |            |
|     18 |    61 | C56, C62, C63, C65, C75-C88, C95-C101, C188-C202, C204-C211, C213-C218, C234- C240                       | Pref         | 20-0100U-B57    | C3216X5R0J107M160AB; GRM31CR60J107ME39                                                                                                    | TDK;MURATA                                                                                                                    | 100UF     | CAP; SMT (1206); 100UF; 20%; 6.3V; X5R; CERAMIC                                                         |            |
|     19 |     3 | C57-C59                                                                                                  | Pref         | 20-0330U-49     | 16SEP330M                                                                                                                                 | PANASONIC                                                                                                                     | 330UF     | CAP; THROUGH HOLE-RADIAL LEAD; 330UF; 20%; 16V; ELECTROLYTIC-OSCON                                      |            |
|     20 |     6 | C60, C61, C149-C152                                                                                      | Pref         | 20-0100U-BA9    | 20TQC100MYF                                                                                                                               | PANASONIC                                                                                                                     | 100UF     | CAP; SMT (7343); 100UF; 20%; 20V; TANTALUM                                                              |            |
|     21 |    13 | C69-C74, C91-C94, C203, C212, C241                                                                       | Pref         | 20-00U01-12     | C0402C103K3RAC; GRM155R71E103KA01; C1005X7R1E103K050BB                                                                                    | KEMET;MURATA;TDK                                                                                                              | 0.01UF    | CAP; SMT (0402); 0.01UF; 10%; 25V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-00u01-B60 |            |
|     22 |    12 | C89, C103-C111, C117, C118                                                                               | Pref         | 20-0047U-A42    | C3216X5R1E476M160AC                                                                                                                       | TDK                                                                                                                           | 47UF      | CAP; SMT (1206); 47UF; 20%; 25V; X5R; CERAMIC                                                           |            |
|     23 |     2 | C113, C225                                                                                               | Pref         | 20-0010U-A51    | GRM21BC81C106KA73                                                                                                                         | MURATA                                                                                                                        | 10UF      | CAP; SMT (0805); 10UF; 10%; 16V; X6S; CERAMIC                                                           |            |
|     24 |    12 | C119-C130                                                                                                | Pref         | 20-0010U-P7     | CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                  | TDK;SAMSUNG ELECTRONICS; MURATA;;MURATA                                                                                       | 10UF      | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                           |            |
|     25 |    12 | C166, C167, C170, C171, C174, C175, C178, C179, C182, C183, C186, C187                                   | Pref         | 20-0010U-E6     | GRM21BR61E106K; C2012X5R1E106K085AC125AB; C2012X5R1E106K085AC; TMK212BBJ106KG; CL21A106KAFN3N                                             | MURATA;TDK;TDK;TAIYO YUDEN;SAMSUNG                                                                                            | 10UF      | CAP; SMT (0805); 10UF; 10%; 25V; X5R; CERAMIC                                                           |            |
|     26 |     3 | D1-D3                                                                                                    | Pref         | 30-MBRS540T3-00 | MBRS540T3G                                                                                                                                | ON SEMICONDUCTOR                                                                                                              | MBRS540T3 | DIODE; SCH; SURFACE MOUNT SCHOTTKYPOWER RECTIFIER; SMC; PIV=40V; IF=5A                                  |            |

## MAX20754 EV Kit Bill of Materials (continued)

| ITEM     | QTY                                             | REF DES                  | VAR STATUS                            | MAXINV                                            | MFG PART #                                                                            | MANUFACTURER      | VALUE DESCRIPTION CONNECTOR; FEMALE; THROUGH                                                                                      | COMMENTS   |
|----------|-------------------------------------------------|--------------------------|---------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------|
| 27       | 3 J1-J3                                         | Pref                     | 01-UPS080101LRA8P-27                  | UPS-08-01-01-L-RA                                 | SAMTEC                                                                                | UPS-08-01-01-L-RA | HOLE; DUAL LEAF POWER HEADER; RIGHT ANGLE; 8PINS                                                                                  |            |
| 28       | 1 J5                                            | Pref                     | 01-PJ102AH3P-27                       | PJ-102AH                                          | CUI INC.                                                                              | PJ-102AH          | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                                |            |
| 29       | 2 J6, J7                                        | Pref                     | 01-10807400011P-80                    | 108-0740-001                                      | EMERSON NETWORK POWER                                                                 | 108-0740-001      | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                          |            |
| 30       | 3 J8-J10                                        | Pref                     | 01-13137012665P-01                    | 131-3701-266                                      | JOHNSON COMPONENTS                                                                    | 131-3701-266      | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                                       |            |
| 31       | 1 J13                                           | Pref                     | 01-TSW10807LD16P-17                   | TSW-108-07-L-D                                    | SAMTEC                                                                                | TSW-108-07-L-D    | CONNECTOR; THROUGH HOLE; TSW SERIES; STRAIGHT; 16PINS                                                                             |            |
| 32       | 2 JP1, JP2                                      | Pref                     | 01-PCC02SAAN2P-21                     | PCC02SAAN                                         | SULLINS                                                                               | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                                         |            |
| 33       | 1 L1                                            | Pref                     | 50-001U2-0GT                          | XAL4020-122ME                                     | COILCRAFT                                                                             | 1.2UH             | INDUCTOR; SMT; SHIELDED; 1.2UH; TOL=+/-20%; 6.6A                                                                                  |            |
| 34       | 3 L2, L3, L6                                    | Pref                     | 50-0100N-0EV                          | CL1208-2-100TR-R                                  | EATON POWERING BUSINESS WORLDWIDE                                                     | CL1208-2-100TR-R  | INDUCTOR; SMT; 100NH; TOL=+/-20%; 56A                                                                                             |            |
| 35       | 1 L5                                            | Pref                     | 50-0033U-0IR                          | LPS6235-333MR                                     | COILCRAFT                                                                             | 33UH              | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%; 1.3A                                                                      |            |
| 36       | 1 Q1                                            | Pref                     | 90-2N7002-06                          | 2N7002;2N7002;2N7002;2N7002                       | DIODES INCORPORATED; ST MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL COMPONENTS | 2N7002            | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                     |            |
| 37       | 1 R1                                            | Pref                     | 80-00R47-CA06                         | ERJ-3RQFR47                                       | PANASONIC                                                                             |                   | 0.47 RES; SMT (0603); 0.47; 1%; +/-300PPM/DEGC; 0.1000W                                                                           |            |
| 38       | 6 R2, R64, R67, R71, R112                       | R68, Pref                | 80-0000R-BA38                         | CRCW04020000Z0EDHP; RCS04020000Z0                 | VISHAY DRALORIC;VISHAY                                                                | DALE              | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.2000W                                                                                     |            |
| 39       | 1 R3                                            | Pref                     | 80-0806R-23                           | CRCW0402806RFK                                    | VISHAY DALE                                                                           |                   | 806 RES; SMT (0402); 806; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 40       | 1 R4                                            | Pref                     | 80-01K78-23                           | ERJ-2RKF1781                                      | PANASONIC                                                                             | 1.78K             | RES; SMT (0402); 1.78K; 1%; +/-100PPM/DEGC; 0.1000W                                                                               |            |
| 41       | 1 R5                                            | Pref                     | 80-01K33-23                           | CR0402-16W-1331FT; CRCW04021K33FK                 | VISHAY                                                                                | 1.33K             | RES; SMT (0402); 1.33K; 1%; +/-100PPM/DEGK; 0.063W                                                                                |            |
| 42       | 1 R6                                            | Pref                     | 80-0649R-18                           | ERJ-2RKF6490                                      | PANASONIC                                                                             |                   | 649 RES; SMT (0402); 649; 1%; +/-100PPM/DEGC; 0.1000W                                                                             |            |
| 43       | 1 R7                                            | Pref                     | 80-0034K-23                           | CRCW040234K0FK                                    | VISHAY DALE                                                                           | 34K               | RES; SMT (0402); 34K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                 |            |
| 44       | 1 R8                                            | Pref                     | 80-02K49-23                           | CRCW04022K49FK                                    | VISHAY DALE                                                                           | 2.49K             | RES; SMT (0402); 2.49K; 1%; +/-100PPM/DEGC; 0.0630W                                                                               |            |
| 45       | 1 R9                                            | Pref                     | 80-0020K-23                           | CRCW040220K0FK                                    | VISHAY DALE                                                                           | 20K               | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                 |            |
| 46       | 6 R10, R11, R25, R26, R41, R50                  | Pref                     | 80-0010R-23                           | CRCW040210R0FK; 9C04021A10R0FL                    | VISHAY DALE;YAGEO                                                                     |                   | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.0630W                                                                               |            |
| 47       | 13 R13, R14, R39, R84, R85, R88, R98, R99, R102 | R59, R90, R92, R93, Pref | 80-0100K-23                           | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                                                                          | 100K              | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                |            |
| 48       | 2 R17, R45                                      | Pref                     | 80-0402R-23                           | CRCW0402402RFK                                    | VISHAY DALE                                                                           |                   | 402 RES; SMT (0402); 402; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 49       | 7 R18, R19, R35, R46, R57, R61                  | R36, Pref                | 80-0001K-23                           | CRCW04021K00FK; RC0402FR-071KL;                   | VISHAY DALE;YAGEO PHICOMP; ROHMSEMI                                                   | 1K                | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                  |            |
| 50       | 6 R20, R21, R37, R47, R58                       | R38, Pref                | 80-0499R-23                           | CRCW0402499RFK                                    | VISHAY DALE                                                                           |                   | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 51       | 1 R23                                           | Pref                     | 80-0100R-23                           | 9C04021A1000FL; RC0402FR-07100RL                  | PANASONIC;YAGEO PHYCOMP                                                               |                   | 100 RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 52       | 1 R24                                           | Pref                     | 80-01K65-23                           | CR0402-16W-1651FT; CRCW04021K65FK                 | VENKEL LTD.;VISHAY DALE                                                               | 1.65K             | RES; SMT (0402); 1.65K; 1%; +/-100PPM/DEGC; 0.0630W                                                                               |            |
| 53       | 1 R27                                           | Pref                     | 80-0274R-BA18                         | ERA-2AEB2740                                      | PANASONIC                                                                             |                   | 274 RES; SMT (0402); 274; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                           |            |
| 54       | 2 R34, R56                                      | Pref                     | 80-0787R-23                           | CRCW0402787RFK                                    | VISHAY DALE                                                                           |                   | 787 RES; SMT (0402); 787; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 55       | 3 R40, R104, R105                               | Pref                     | 80-0150R-23                           | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE;YAGEO                                                                     |                   | 150 RES; SMT (0402); 150; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |            |
| 56       | 1 R44                                           | Pref                     | 80-0332R-23                           | CRCW0402332RFK                                    | VISHAY DALE                                                                           | 37.4K             | 332 RES; SMT (0402); 332; 1%; +/-100PPM/DEGC; 0.0630W +/-100PPM/DEGK; 0.0630W                                                     |            |
| 57       | 1 R48                                           | Pref                     | 80-037K4-AA18                         | CRCW040237K4FK                                    | VISHAY DALE PANASONIC                                                                 | 1.21K             | RES; SMT (0402); 37.4K; 1%;                                                                                                       |            |
| 58       | 1 R49                                           | Pref                     | 80-01K21-C5D                          | ERA-2AEB1211                                      |                                                                                       |                   | RES; SMT (0402); 1.21K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                             |            |
| 59       | 1 R51                                           | Pref                     | 80-0499R-18                           | ERJ-2RKF4990                                      | PANASONIC                                                                             |                   | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.1000W                                                                             |            |
| 60 61    | 2 R53, R54 8 R60,                               | Pref Pref                | 80-0001R-23 80-0000R-26B              | CRCW04021R00FK RC0402JR-070RL;                    | VISHAY DALE                                                                           |                   | 1 RES; SMT (0402); 1; 1%; +/-100PPM/DEGC; 0.0630W                                                                                 |            |
|          | R63,                                            | R114-R119                |                                       | CR0402-16W-000RJT                                 | YAGEO PHYCOMP;VENKEL VENKEL LTD.;VISHAY DALE                                          | LTD.              | 0 RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                         |            |
| 62       | 1 R62                                           | Pref                     | 80-052R3-23                           | CR0402-16W-52R3FT; CRCW040252R3FK                 |                                                                                       |                   | 52.3 RES; SMT (0402); 52.3; 1%; +/-100PPM/DEGK; 0.0630W                                                                           |            |
| 63 64 65 | 2 R65, R69 2 R66, R70 4 R86, R87, R94,          | Pref Pref R95 Pref       | 80-049R9-BA37 80-0100R-65 80-0002K-23 | CRCW040249R9FKEDHP CRCW2512100RFK CRCW04022K00FK; | VISHAY DRALORIC VISHAY DALE VISHAY DALE;KOA                                           | SPEER             | 49.9 RES; SMT (0402); 49.9; 1%; +/-100PPM/DEGC; 0.2000W 100 RES; SMT (2512); 100; 1%; +/-100PPM/DEGC; 1W RES; SMT (0402); 2K; 1%; |            |
| 66       | 2 R103, R106                                    |                          |                                       | RK73H1ETTP2001F CRCW0402221RFK                    | VISHAY DALE                                                                           | 2K                | +/-100PPM/DEGC; 0.0630W 221 RES; SMT (0402); 221; 1%;                                                                             |            |
| 67       |                                                 |                          | 80-0221R-23                           | ERJ-2RKF10R0                                      |                                                                                       |                   | +/-100PPM/DEGC; 0.0630W                                                                                                           |            |
|          |                                                 | Pref                     | 80-0010R-18                           |                                                   |                                                                                       |                   |                                                                                                                                   |            |
|          | 2 R110, R111                                    | Pref                     |                                       |                                                   | PANASONIC                                                                             |                   | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                               |            |
| 68 69    | 3 S2, S3, S5                                    | Pref                     | 11-G12JPCF-00                         | G12JPCF                                           | NKK SWITCHES                                                                          | G12JPCF           | SWITCH; SPDT; SMT; STRAIGHT; 28V; FULLY ILLUMINATED ULTRA-MINIATURE TOGGLE; RCOIL=0 OHM; RINSULATION=500M OHM; NKK SWITCHES       |            |
|          | 1 S4                                            | Pref                     | 11-TL3301AF160QJ-00                   | TL3301AF160QJ                                     | E-SWITCH                                                                              | TL3301AF160QJ     | SWITCH; SPST; SMT; STRAIGHT; 250V; 0.05A; TACT SWITCH; RCOIL=0 OHM; RINSULATION=500M OHM; E-SWITCH                                |            |
| 70       | 4                                               | ST1-ST4 Pref             | 02-TTVER7808-00                       |                                                   | 7808 KEYSTONE                                                                         |                   | 7808 TERMINAL; BODYLENGTH=0.67IN; BODYWIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                                                    |            |

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Bill of Materials (continued)

| ITEM     | QTY   | REF DES                            | VAR STATUS   | MAXINV            | MFG PART       | MANUFACTURER            | VALUE          | DESCRIPTION                                                                                                                                                                                                                                                                | COMMENTS                                      |
|----------|-------|------------------------------------|--------------|-------------------|----------------|-------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| 71       | 8     | TP1-TP6, TP36, TP37                | Pref         | 02-TPMINI5002-00  |                | 5002 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                                                                                                                    | APAD                                          |
| 72       | 9     | TP8, TP10, TP12, TP29-TP33, TP39   | Pref         | 02-TPMINI5011-00  |                | 5011 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                         | BLACK                                         |
| 73       | 6     | TP13, TP14, TP23, TP24, TP17, TP38 | Pref         | 02-TPMINI5012-00  |                | 5012 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                         | (TP13,TP14,TP23, TP24:BPAD) (TP17,TP38:WHITE) |
| 74       | 2     | TP18, TP40                         | Pref         | 02-TPMULTI5126-00 |                | 5126 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                         | GREEN                                         |
| 75       | 3     | TP19, TP25, TP27                   | Pref         | 02-TPMINI5000-00  |                | 5000 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                                | APAD                                          |
| 76       | 2     | TP20, TP21                         | Pref         | 02-TPMINI5013-00  |                | 5013 KEYSTONE           | N/A            | TESTPOINT;PINDIA=0.125IN; TOTALLENGTH=0.445IN;BOARDHOLE=0.063IN;ORAN GE;PHOSPHORBRONZEWIRESILVERPLATEFINISH;R ECOMMENDEDFORBOARDTHICKNESS=0.062IN;NOT FORCOLDTEST                                                                                                          | (TP20:ORANGE) (TP21:YELLOW)                   |
| 77       | 3     | TP22, TP26, TP28                   | Pref         | 02-TPMINI5001-00  |                | 5001 KEYSTONE           | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                              | APAD                                          |
| 78       | 5     | TP7, TP9, TP11, TP35, TP34         | Pref         | 02-TPMINI5010-00  |                | 5010 KEYSTONE           | N/A            | TESTPOINT;PINDIA=0.125IN; TOTALLENGTH=0.445IN;BOARDHOLE=0.063IN;RED;P HOSPHORBRONZEWIRESIL;NOTFORCOLDTEST                                                                                                                                                                  | (TP7,TP9,TP11, TP35:RED) (TP34:BLUE)          |
| 79       | 1     | U1                                 | Pref         | 00-SAMPLE-01      | MAX20754ETMA2+ | MAXIM                   | MAX20754ETMA2+ | EVKIT PART - IC; CTRL; DUAL- OUTPUT; CONFIGURABLE MULTIPHASE POWER- SUPPLYCONTROLLER WITH PMBUS INTERFACE AND INTERNAL BUCK CONVERTER; LOW-VOLTAGE APPLICATIONS; PACKAGE CODE: T4877+4; PACKAGE OUTLINE NO.: 21-0144; PACKAGE LAND PATTERN DRAWING NO.: 90-0130; TQFN48-EP |                                               |
| 80       | 6     | U2-U7                              | Pref         | 00-SAMPLE-02      | MAX20790       | MAXIM                   | MAX20790       | EVKIT PART - IC; FC2QFN-12; 7.40MM X 3.25MM; 12 PINS; NOTE: PCB FOOTPRINT UNDER DEVELOPMENT                                                                                                                                                                                |                                               |
| 81       | 1     | U8                                 | Pref         | 10-MAX17501EATB-T | MAX17501EATB+  | MAXIM                   | MAX17501EATB+  | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC- DC CONVERTER; TDFN10-EP                                                                                                                                                                                  |                                               |
| 82       | 3     | U9, U10, U14                       | Pref         | 10-NC7WZ38K8X-U   | NC7WZ38K8X     | FAIRCHILD SEMICONDUCTOR | NC7WZ38K8X     | IC; NAND; TINY LOGIC UHS DUAL 2-INPUT NAND GATE; OPEN DRAIN OUTPUT; VSSOP8                                                                                                                                                                                                 |                                               |
| 83       | 1     | U11                                | Pref         | 10-NC7SZ08L6X-G   | NC7SZ08L6X     | FAIRCHILD SEMICONDUCTOR | NC7SZ08L6X     | IC; AND; NC7SZ08; TINYLOGIC; ULTRA HIGH SPEED; TWO-INPUT AND GATE ; MICROPAK                                                                                                                                                                                               |                                               |
| 84       | 1     | U12                                | Pref         | 10-NC7SZ14M5X-U   | NC7SZ14M5X     | FAIRCHILD SEMICONDUCTOR | NC7SZ14M5X     | IC; INV; TINYLOGIC UHS INVERTER WITH SCHMITT TRIGGER INPUT; SOT23-5                                                                                                                                                                                                        |                                               |
| 85       | 1     | U13                                | Pref         | 10-NC7WZ32K8X-U   | NC7WZ32K8X     | FAIRCHILD SEMICONDUCTOR | NC7WZ32K8X     | IC; OR; TINY LOGIC; UHS DUAL 2-INPUT OR GATE; US8-8                                                                                                                                                                                                                        |                                               |
| 86 TOTAL | 1 370 | PCB                                | -            | EPCB20754VK11     | MAX20754VK11   | MAXIM                   | PCB            | PCB:MAX20754VK11                                                                                                                                                                                                                                                           | -                                             |

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic

<!-- image -->

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit Schematic (continued)

<!-- image -->

## MAX20754EVKIT7 Evaluation Kit

## MAX20754 EV Kit PCB Layout Diagrams

MAX20754 EV Kit---Top Silkscreen

<!-- image -->

MAX20754 EV Kit---Top Layer

<!-- image -->

Evaluates: MAX20754 and

MAX20754 EV Kit---Internal Layer 2 GND

<!-- image -->

MAX20754 EV Kit---Internal Layer 3 Signal

<!-- image -->

## MAX20754 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20754 EV Kit---Internal Layer 4 Signal

<!-- image -->

MAX20754 EV Kit---Bottom Layer

MAX20754 EV Kit---Internal Layer 5 GND

<!-- image -->

MAX20754 EV Kit---Bottom Silkscreen

<!-- image -->

Evaluates: MAX20754 and

## MAX20754EVKIT7 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX20754 and