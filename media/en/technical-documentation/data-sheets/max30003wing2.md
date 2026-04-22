<!-- lastmod 2023-04-11 -->
## MAX30003WING2# Evaluation Kit

## General Description

The  MAX30003WING2  evaluation  kit  demonstrates  the use of the MAX32663A MCU as an ECG sensor hub. The MAX32663A  runs  advanced  ECG  algorithms  provided by  B-Secur,  which  transforms  raw  ECG  data  collected from the MAX30003 analog front end (AFE) into simple, high-level information which is then communicated to the MAX32620FTHR  host  processor  through  the  I 2 C  interface. The EV kit is accompanied by PC software, which allows easy evaluation of the ECG algorithms.

The kit includes the following items:

- MAX30003WING2# Circuit Board
- MAX326325PICO JTAG Debugger/Programmer
- MAX32620FTHR Feather Board
- Micro USB Cables
- SWD Cable

## Benefits and Features

- Integrates B-Secur ECG Firmware
- Evaluates MAX32663A Sensor Hub and the MAX30003 ECG AFE
- Measures Heart Rate, Heart Rate Variability, and Stress
- User Identification through ECG Analysis
- PCB ECG Electrodes
- Connector for External ECG Electrodes
- Adafruit ®  Feather-Compatible Host Processor Socket with MAX32620FTHR Board Installed

Ordering Information appears at end of data sheet.

Adafruit is registered trademark of Adafruit Industries. Windows is a registered trademark of Microsoft Corp.

319-100486; Rev 2; 11/20

Evaluates: MAX32663A

## Detailed Description

The EV kit  demonstrates  several  B-Secur  ECG  algorithms that execute on the MAX32663A sensor hub. The MAX30003 provides the AFE to integrated ECG PCB pads and optional external  electrodes  (not  included).  The  EV  kit  supports  the following B-Secur algorithms:

- Heart Rate
- Heart Rate Variability
- Stress
- Energy Expenditure
- User Identification

The MAX32620FTHR serves as the host MCU, which obtains high-level ECG information from the sensor hub through an I 2 C interface and relays the information to a Windows ®  PC application through USB. This host MCU could serve as an embedded platform for user application development.

The kit is accompanied by Windows PC software and host MCU  source  code,  which  can  be  downloaded  from  the MAX30003WING2 EV kit product page.

## Simplified Block Diagram

<!-- image -->

<!-- image -->

## MAX30003WING2 EV Kit Bill of Materials

| REFDES                      | MANUFACTURER                    | PART NUMBER          | DESCRIPTION                                                                         |
|-----------------------------|---------------------------------|----------------------|-------------------------------------------------------------------------------------|
| C1, C2, C3, C6, C7, C9, C14 | Samsung Electro-Mechanics       | CL10B105KP8NNNC      | Cap 1µF ±10% 10V X7R 0603                                                           |
| C4, C12, C13                | Samsung Electro-Mechanics       | CL10A106MQ8NNNC      | CAP CER 10UF 6.3V X5R 0603                                                          |
| C5                          | Samsung Electro-Mechanics       | CL10B104KO8NNNC      | CAP CER 0.1UF 16V X7R 0603                                                          |
| C8, C11                     | KEMET                           | C0603C100D5GACTU     | CAP CER 10PF 50V C0G/NP0 0603, CAP CER 10PF 50V NP0 0201                            |
| C10                         | KEMET                           | C0402C102K5RACTU     | CAP CER 1000PF 50V X7R 0402                                                         |
| C15                         | Samsung Electro-Mechanics       | CL10C102JB8NNNC      | CAP CER 1000PF 50V C0G/NP0 0603                                                     |
| J1                          | Samtec Inc                      | FTSH-105-01-F-DV-K-P | CONN HEADER 10POS DUAL .05' SMD                                                     |
| J2                          | Sullins Connector Solutions     | PPPC161LFBN-RC       | CONN HEADER FEMALE 16POS .1' GOLD                                                   |
| J3                          | Sullins Connector Solutions     | PPPC121LFBN-RC       | CONN HEADER FEMALE 12POS .1' GOLD                                                   |
| J4                          | CUI Inc.                        | SJ-3523-SMT-TR       | CONN JACK STEREO 3.5MM SMD R/A                                                      |
| R2, R7, R8                  | Stackpole Electronics Inc       | RMCF0603FT10K0       | RES 10K OHM 1% 1/10W 0603                                                           |
| R4, R5                      | Panasonic Electronic Components | ERJ-3EKF4992V        | RES SMD 49.9K OHM 1% 1/10W 0603                                                     |
| R6                          | Yageo                           | RT0603DRD07499KL     | RES SMD 499K OHM 0.5% 1/10W 0603                                                    |
| U1                          | Maxim Integrated                | DS28EL15Q+U          | 1-WIRE SHA-256 SECUREAUTHENTICATOR WITH 512BIT EEPROM                               |
| U2                          | Maxim Integrated                | MAX32663AGWEFS+      | B-Secur ECG Sensor Hub                                                              |
| U3                          | Maxim Integrated                | MAX30003CTI+         | Ultra-Low Power, Single-Channel Integrated Biopotential (ECG, R-to-R Detection) AFE |
| U4                          | Maxim Integrated                | MAX1726EUK18+        | Low-Dropout Linear Regulators 12V                                                   |
| X1                          | ECS Inc.                        | ECS-.327-6-12-TR     | CRYSTAL 32.7680KHZ 6PF SMD                                                          |
| X2                          | Diodes Incorporated             | KX3211A0032.768000   | XTAL OSC XO 32.7680KHZ CMOS SMD                                                     |

## Ordering Information

| PART           | TYPE           |
|----------------|----------------|
| MAX30003WING2# | Evaluation Kit |

#Denotes RoHS compliance.

Evaluates: MAX32663A

│

## MAX30003WING2 EV Kit Schematic

<!-- image -->

Evaluates: MAX32663A

## MAX30003WING2 EV Kit PCB Layout Diagrams

Top

<!-- image -->

Bottom

<!-- image -->

Evaluates: MAX32663A

│

## MAX30003WING2# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/19           | Initial release                                                                                                                     | -               |
|                 1 | 10/20           | Updated General Description , Benefits and Features , Detailed Description Simplified Block Diagram , Bill of Materials , Schematic | 1, 2, 3         |
|                 2 | 11/20           | Updated MAX32663 to MAX32663A                                                                                                       | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUHGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;LPSOLHGGLYPH&lt;c=17,font=/RIMHDV+ArialMT&gt;GLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;0D[LPGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;,QWHJUDWHGGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;UHVHUYHVGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;WKHGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;ULJKWGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;WRGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;FKDQJHGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;WKHGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;FLUFXLWU\GLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;DQGGLYPH&lt;c=3,font=/RIMHDV+ArialMT&gt;VS

<!-- image -->

│

Evaluates: MAX32663A